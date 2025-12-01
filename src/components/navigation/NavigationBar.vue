<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

import flagRO from '@/assets/flags/ro.png'
import flagEN from '@/assets/flags/en.png'

const languages = [
    { code: 'ro', name: 'Română', flag: flagRO },
    { code: 'en', name: 'English', flag: flagEN }
]

const currentLang = ref(languages[0])
const langOpen = ref(false)
const isScrolled = ref(false)

const toggleLang = () => (langOpen.value = !langOpen.value)
const setLanguage = (lang) => {
    currentLang.value = lang
    langOpen.value = false
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header :class="[
        'w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-transparent py-6 md:py-8'
    ]">
        <div
            class="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-in-out">

            <!-- LEFT SIDE -->
            <div class="flex items-center gap-8 md:gap-12 transition-all duration-500 ease-in-out">

                <!-- LOGO / PROVIDENTA -->
                <RouterLink to="/" :class="[
                    'font-extrabold tracking-wide transition-all duration-500 ease-in-out',
                    isScrolled ? 'text-2xl md:text-3xl text-gray-900' : 'text-3xl md:text-4xl text-white'
                ]">
                    PROVIDENTA
                </RouterLink>

                <!-- NAV LINKS -->
                <nav
                    class="flex items-center gap-6 md:gap-8 uppercase font-medium text-sm md:text-base transition-all duration-500 ease-in-out">
                    <RouterLink to="/about"
                        :class="[isScrolled ? 'text-gray-900 text-sm md:text-base' : 'text-white text-base md:text-lg', 'hover:text-gradient transition-all']">
                        Despre noi
                    </RouterLink>
                    <RouterLink to="/tineret"
                        :class="[isScrolled ? 'text-gray-900 text-sm md:text-base' : 'text-white text-base md:text-lg', 'hover:text-gradient transition-all']">
                        Tineret
                    </RouterLink>
                    <RouterLink to="/implica-te"
                        :class="[isScrolled ? 'text-gray-900 text-sm md:text-base' : 'text-white text-base md:text-lg', 'hover:text-gradient transition-all']">
                        Implică-te
                    </RouterLink>
                </nav>

            </div>

            <!-- RIGHT SIDE -->
            <div class="flex items-center gap-4 md:gap-6 transition-all duration-500 ease-in-out">

                <!-- CONTACT -->
                <RouterLink to="/contact"
                    :class="[isScrolled ? 'text-gray-900 text-sm md:text-base' : 'text-white text-base md:text-lg', 'uppercase font-semibold hover:text-gradient transition-all']">
                    Contact
                </RouterLink>

                <!-- LANGUAGE SWITCH -->
                <div class="relative">
                    <button @click="toggleLang" :class="[
                        'flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md transition-all duration-300',
                        isScrolled
                            ? 'bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm'
                            : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-base'
                    ]">
                        <img :src="currentLang.flag" class="w-5 h-5 rounded-full" />
                        <span class="font-semibold">{{ currentLang.code.toUpperCase() }}</span>
                        <i :class="langOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                    </button>

                    <div v-if="langOpen" class="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-36 z-20">
                        <button v-for="lang in languages" :key="lang.code" @click="setLanguage(lang)"
                            class="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 rounded transition-all">
                            <img :src="lang.flag" class="w-5 h-5 rounded-full" />
                            <span>{{ lang.name }}</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<style scoped>
.hover\:text-gradient:hover {
    background: linear-gradient(to right, #FFD064, #FFFFFF);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>
