<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row items-start justify-between gap-12">

            <!-- Left side content -->
            <div class="w-full md:w-5/12 md:sticky top-10 pt-2 md:pb-6">
                <div class="flex flex-col items-center md:items-start text-center md:text-left">
                    <p v-if="subtitle"
                        class="text-lg font-bebas-neue text-brand-blue-navy mb-2 flex items-center justify-center md:justify-start"
                        :class="{ 'text-white': whiteTheme }">
                        <i class="bi bi-book h-5 w-5 mr-2" :class="{ 'text-white': whiteTheme }" aria-hidden="true"></i>
                        {{ subtitle }}
                    </p>

                    <h2 v-if="title"
                        class="text-4xl sm:text-5xl font-extrabold uppercase leading-none mb-4 font-bebas-neue text-gray-900"
                        :class="{ 'text-white': whiteTheme }">
                        <span class="block">{{ title.split('|')[0] }}</span>
                        <span v-if="title.split('|')[1]" class="text-brand-gold block">{{ title.split('|')[1] }}</span>
                    </h2>

                    <p v-if="description"
                        class="text-base text-gray-700 leading-relaxed max-w-xl mb-8 font-ovo"
                        :class="{ 'text-white': whiteTheme }">
                        {{ description }}
                    </p>
                </div>

                <a v-if="buttonText" :href="buttonLink"
                    class="block md:inline-block mx-auto md:mx-0 w-max px-6 py-3 bg-brand-blue-navy text-white font-bold rounded-lg shadow-md hover:bg-brand-gold hover:text-brand-blue-navy transition-colors duration-200 uppercase text-sm text-center md:text-left">
                    {{ buttonText }}
                </a>
            </div>

            <!-- Right side FAQ -->
            <div class="w-full md:w-7/12 mt-0">
                <div v-for="(faq, index) in faqs" :key="index" class="py-2 cursor-pointer">
                    <div class="flex items-center justify-between w-full text-left border px-6 py-4 rounded-2xl hover:cursor-pointer transition-all duration-300 ease-in-out"
                        :class="{
                            'bg-brand-blue-navy text-brand-gold': openIndex === index,
                            'text-brand-blue-navy hover:bg-gray-100': openIndex !== index && !whiteTheme,
                            'text-brand-gold': whiteTheme && openIndex !== index
                        }" @click="toggle(index)">
                        <h3 class="text-3xl font-semibold font-bebas-neue transition-colors duration-300" :class="{
                            'text-brand-gold': openIndex === index
                        }">
                            {{ faq.question }}
                        </h3>

                        <span aria-hidden="true"
                            class="text-4xl font-extrabold transform transition-transform duration-200" :class="{
                                'text-brand-gold': openIndex === index,
                                'text-brand-blue-navy': openIndex !== index
                            }">
                            {{ openIndex === index ? '−' : '+' }}
                        </span>
                    </div>

                    <div :class="openIndex === index ? 'max-h-72 opacity-100 -translate-y-2 rounded-2xl p-8 mt-3 bg-brand-gold-light' : 'max-h-0 opacity-0 -translate-y-2'"
                        class="transition-all duration-300 overflow-hidden">
                        <p class="text-lg text-gray-950 max-w-xl">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
    subtitle: { type: String, default: "Doubt and Discovery" },
    title: { type: String, default: "QUESTIONS ABOUT OUR|CHURCH" },
    description: {
        type: String,
        default:
            "Porttitor ullamcorper rutrum posuere. Fusce feugiat odio vel malesuada ex posuere nec. Nunc a neque felis.",
    },
    buttonText: { type: String, default: "MORE FAQ" },
    buttonLink: { type: String, default: "#" },
    faqs: {
        type: Array,
        default: () => [],
    },
    whiteTheme: { type: Boolean, default: false }
});

const openIndex = ref(null);
const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};

const route = useRoute();
const currentRoutePath = ref(route.path);

watch(
    () => route.path,
    (newPath) => {
        currentRoutePath.value = newPath;
    }
);
</script>
