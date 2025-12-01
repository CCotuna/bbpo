<script setup>
import { ref } from 'vue'

import Image from '@/assets/Ministry1.jpeg'
import Image2 from '@/assets/Ministry1.jpeg'
import Image3 from '@/assets/Ministry1.jpeg'
import Image4 from '@/assets/Ministry1.jpeg'
import Image5 from '@/assets/Ministry1.jpeg'

const programsData = ref({
    title: 'Implică-te și tu!',
    description:
        'Programe pentru întreaga familie: slujbe, copii, tineret, grupuri de casă și acțiuni sociale. Toți sunt bineveniți!',
    ctaPrograms: 'Vezi programul complet',
    levels: [
        {
            id: 'worship',
            name: 'Slujbe de duminică',
            summary:
                'Slujbă de închinare pentru întreaga familie — muzică, predică aplicată și timp pentru părtășie.',
            image: Image,
            learnMoreLink: '/home'
        },
        {
            id: 'kids',
            name: 'Copii & Juniori',
            summary:
                'Ateliere biblice și activități adaptate vârstei pentru a descoperi credința și valorile creștine.',
            image: Image2,
            learnMoreLink: '/home'
        },
        {
            id: 'youth',
            name: 'Tineret',
            summary:
                'Întâlniri săptămânale, discuții aplicate și proiecte care implică comunitatea și dezvoltarea personală.',
            image: Image3,
            learnMoreLink: '/vector'
        },
        {
            id: 'outreach',
            name: 'Misiune & Social',
            summary:
                'Proiecte locale și misiuni care ajută persoane din nevoie: voluntariat, donații și evenimente comunitare.',
            image: Image4,
            learnMoreLink: '/home'
        },
        {
            id: 'community',
            name: 'Grupuri de casă',
            summary:
                'Grupuri mici pentru studiu biblic, rugăciune și sprijin reciproc în viața de zi cu zi.',
            image: Image5,
            learnMoreLink: '/home'
        }
    ]
})

const scrollContainer = ref(null)

const scrollLeft = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
    }
}

const scrollRight = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
    }
}
</script>

<template>
    <section id="programs" class="w-full h-fit mt-20 bg-brand-purple text-brand-white flex flex-col justify-center">
        <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="text-left mb-8 max-w-7xl mx-auto">
                <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-center leading-none mb-6">
                    <span class="text-gray-900 font-bebas-neue block">{{ programsData.title }}</span>
                </h2>
                <p class="text-base sm:text-lg text-center text-gray-700 leading-relaxed mb-8">{{
                    programsData.description }}</p>
            </div>

            <div class="relative">
                <div ref="scrollContainer"
                    class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4 lg:px-2 no-scrollbar w-full"
                    aria-label="Carusel programe">
                    <div v-for="level in programsData.levels" :key="level.id" class="snap-start rounded-xl overflow-hidden group transition-all duration-300 relative bg-cover bg-center flex-shrink-0 shine-hover
                       w-[80vw] max-w-xs h-96
                       sm:w-72 sm:max-w-sm sm:h-[28rem]
                       md:w-80 md:max-w-md md:h-[36rem]
                       lg:w-[30rem] lg:max-w-[30rem] lg:h-[45rem]" :style="{ backgroundImage: `url(${level.image})` }">
                        <div class="absolute inset-0 bg-black/10"></div>

                        <div class="relative z-10 p-4 flex flex-col h-full justify-end">
                            <h3
                                class="font-bold mb-2 text-xl md:text-2xl text-white leading-tight group-hover:text-brand-gold-light transition-colors uppercase">
                                {{ level.name }}
                            </h3>
                            <p class="text-slate-200 mb-4 text-sm md:text-base">{{ level.summary }}</p>

                            <NuxtLink :to="level.learnMoreLink"
                                class="inline-block text-xs font-medium py-1.5 px-3 max-w-fit rounded transition border border-white bg-white text-brand-navy-dark shadow hover:bg-white/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Afla mai multe">
                                Află mai mult
                                <i class="bi bi-arrow-right-short ml-1"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <button @click="scrollLeft" class="z-20 absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2
           bg-black/40 hover:bg-black/60 
           backdrop-blur-md
           p-3 rounded-full border border-white/10 
           transition-all duration-300 flex items-center justify-center" aria-label="Derulează stânga">

                    <i class="bi bi-chevron-left text-white text-2xl"></i>
                </button>


                <button @click="scrollRight" class="z-20 absolute -right-2 md:right-0 top-1/2 -translate-y-1/2
           bg-black/40 hover:bg-black/60
           backdrop-blur-md
           p-3 rounded-full border border-white/10 
           transition-all duration-300 flex items-center justify-center" aria-label="Derulează dreapta">
                    <i class="bi bi-chevron-right text-white text-2xl"></i>
                </button>

            </div>
        </div>
    </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
