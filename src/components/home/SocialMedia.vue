<script setup>
import { reactive, watchEffect, useAttrs } from 'vue'
import RotatingBadge from '@/components/svgs/RotatingBadge.vue'
import Logo from '@/components/logo/Logo.vue'

const props = defineProps({
    mainImage: { type: String, default: 'https://images.pexels.com/photos/159108/light-lamp-electricity-power-159108.jpeg' },

    instagram: { type: String, default: '' },
    instagramLink: { type: String, default: '' },
    facebook: { type: String, default: '' },
    facebookLink: { type: String, default: '' },
})

const rawAttrs = useAttrs()

const $attrs = reactive({ ...rawAttrs })

watchEffect(() => {
    $attrs.instagram = props.instagram || props.instagramLink || rawAttrs.instagram || rawAttrs.instagramLink
    $attrs.facebook = props.facebook || props.facebookLink || rawAttrs.facebook || rawAttrs.facebookLink
})
</script>
<template>
    <div class="max-w-7xl mx-auto px-4 mt-32">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">

            <div class="w-full md:w-1/2 flex flex-col justify-center pb-20 md:pb-0">

                <h2
                    class="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-none mb-6 text-center md:text-left">
                    <span class="text-gray-900 font-bebas-neue block">URMARESTE BISERICA NOASTRA</span>
                    <span class="text-brand-gold font-bebas-neue block">SI PE SOCIAL MEDIA</span>
                </h2>

                <p class="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mb-8">
                    Te invităm să ne contactezi sau să ne urmărești pe rețelele sociale.
                    Aici poți găsi evenimente viitoare, mărturii și noutăți despre comunitatea noastră.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 max-w-md">
                    <a :href="$attrs.facebook || '#'" target="_blank" rel="noopener noreferrer"
                        class="flex-1 inline-flex items-center justify-center gap-2 text-center rounded-md text-sm font-medium py-3 px-6 shadow-md transition-all
                              bg-brand-blue-navy text-white hover:bg-brand-gold hover:text-brand-blue-navy uppercase font-bold">
                        <i class="bi bi-facebook w-5 h-5" aria-hidden="true"></i>
                        <span>Facebook</span>
                    </a>

                    <a :href="$attrs.instagram || '#'" target="_blank" rel="noopener noreferrer"
                        class="flex-1 inline-flex items-center justify-center gap-2 text-center rounded-md text-sm font-medium py-3 px-6 shadow-md transition-all
                              bg-brand-gold text-brand-blue-navy hover:bg-brand-blue-navy hover:text-white uppercase font-bold">
                        <i class="bi bi-instagram w-5 h-5" aria-hidden="true"></i>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            <div class="block w-full md:w-1/2 relative">
                <img :src="mainImage" alt="Imagine reprezentativă pentru social media"
                    class="w-full h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]" />

                <div class="hidden md:block absolute -top-25 -right-25 p-8 z-10">
                    <RotatingBadge :size="175" circular-text1="• BISERICA PROVIDENTA •"
                        circular-text2="• CREDINTA • INCHINARE •" duration="10s">
                        <template #logo>
                            <Logo :size="70" class="ms-2" :color="'white'" />
                        </template>
                    </RotatingBadge>
                </div>

                <div class="block md:hidden absolute left-1/2 -top-30 p-8 z-10 transform -translate-x-1/2">
                    <RotatingBadge :size="175" circular-text1="• BISERICA PROVIDENTA •"
                        circular-text2="• CREDINTA • INCHINARE •" duration="10s">
                        <template #logo>
                            <Logo :size="70" class="ms-2" :color="'white'" />
                        </template>
                    </RotatingBadge>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.font-bebas-neue {
    font-family: 'Bebas Neue', 'Anton', sans-serif;
}
</style>