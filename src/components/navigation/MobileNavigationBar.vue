<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import flagRO from '@/assets/flags/ro.png'
import flagEN from '@/assets/flags/en.png'

const menuOpen = ref(false)
const langOpen = ref(false)

const languages = [
    { code: 'ro', name: 'Română', flag: flagRO },
    { code: 'en', name: 'English', flag: flagEN }
]

const currentLang = ref(languages[0])

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const toggleLang = () => (langOpen.value = !langOpen.value)

const setLanguage = (lang) => {
    currentLang.value = lang
    langOpen.value = false
}
</script>

<template>
    <!-- MOBILE NAVBAR (fixed top) -->
    <header
        class="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl px-6 py-4 flex items-center justify-between md:hidden">

        <!-- LOGO -->
        <RouterLink to="/" class="text-white text-2xl font-extrabold tracking-wide">
            PROVIDENTA
        </RouterLink>

        <!-- HAMBURGER -->
        <button @click="toggleMenu" class="text-white text-3xl">
            <i :class="menuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
        </button>
    </header>

    <!-- MOBILE MENU (slide-down) -->
    <transition name="slide-fade">
        <div v-if="menuOpen"
            class="fixed top-16 left-0 right-0 bg-black/80 backdrop-blur-xl z-40 flex flex-col py-6 px-6 space-y-4 text-white md:hidden">

            <!-- LINKS -->
            <RouterLink @click="menuOpen = false" to="/about"
                class="text-lg uppercase font-semibold hover:text-brand-gold transition">
                Despre noi
            </RouterLink>

            <RouterLink @click="menuOpen = false" to="/tineret"
                class="text-lg uppercase font-semibold hover:text-brand-gold transition">
                Tineret
            </RouterLink>

            <RouterLink @click="menuOpen = false" to="/implica-te"
                class="text-lg uppercase font-semibold hover:text-brand-gold transition">
                Implică-te
            </RouterLink>

            <RouterLink @click="menuOpen = false" to="/contact"
                class="text-lg uppercase font-semibold hover:text-brand-gold transition">
                Contact
            </RouterLink>

            <!-- LANGUAGE SWITCH -->
            <div class="relative pt-4">
                <button @click="toggleLang"
                    class="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                    <img :src="currentLang.flag" class="w-5 h-5 rounded-full" />
                    <span class="font-semibold">{{ currentLang.code.toUpperCase() }}</span>
                    <i :class="langOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                </button>

                <div v-if="langOpen"
                    class="absolute mt-2 bg-white text-black rounded-lg shadow-lg w-40 p-2 right-0 z-50">
                    <button v-for="lang in languages" :key="lang.code" @click="setLanguage(lang)"
                        class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded">
                        <img :src="lang.flag" class="w-5 h-5 rounded-full" />
                        <span>{{ lang.name }}</span>
                    </button>
                </div>
            </div>

        </div>
    </transition>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
