<script setup>
import Image2 from '@/assets/Section22.jpeg'
</script>

<template>
    <div class="relative flex flex-col md:flex-row items-center w-full mt-12 max-w-8xl mx-auto px-4 md:px-0">

        <!-- CONTENT -->
        <div
            class="flex-1 w-full md:max-w-7xl p-4 md:pe-8 flex flex-col justify-center bg-gradient-to-b from-white/90 to-white/70 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">

            <h2
                class="text-gray-900 text-4xl sm:text-5xl lg:text-5xl font-extrabold uppercase mb-6 font-bebas-neue leading-tight text-center md:text-center">
                <span class="text-brand-gold">Dragostea</span> care ne-a <br /> găsit mai întâi.
            </h2>

            <span
                class="block mx-auto text-center text-2xl sm:text-3xl uppercase mb-4 font-bebas-neue tracking-wide max-w-2xl">
                Biserica Baptistă <span class="text-brand-gold">Providența</span> Oradea
            </span>

            <p
                class="block mx-auto text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl text-center md:text-center">
                O comunitate unde credința devine viață, iar închinarea se împletește cu părtășia.
                Te invităm să te alături și tu!
            </p>

            <!-- CARDS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6">

                <div
                    class="bg-white/90 border border-brand-gold hover:border-brand-blue-navy text-brand-gold hover:text-brand-blue-navy rounded-xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-md">
                    <i class="bi bi-sun-fill text-4xl mb-2"></i>
                    <h3 class="text-sm font-semibold text-black mb-1">Duminică</h3>
                    <p class="text-xl text-gray-600">10:00</p>
                </div>

                <div
                    class="bg-white/90 border border-brand-gold hover:border-brand-blue-navy text-brand-gold hover:text-brand-blue-navy rounded-xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-md">
                    <i class="bi bi-moon-fill text-4xl mb-2"></i>
                    <h3 class="text-sm font-semibold text-black mb-1">Duminică Seara</h3>
                    <p class="text-xl text-gray-600">17:00</p>
                </div>

                <div
                    class="bg-white/90 border border-brand-gold hover:border-brand-blue-navy text-brand-gold hover:text-brand-blue-navy rounded-xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-md">
                    <i class="bi bi-book-fill text-4xl mb-2"></i>
                    <h3 class="text-sm font-semibold text-black mb-1">Marți dimineața</h3>
                    <p class="text-xl text-gray-600">06:30</p>
                </div>

                <div
                    class="bg-white/90 border border-brand-gold hover:border-brand-blue-navy text-brand-gold hover:text-brand-blue-navy rounded-xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-md">
                    <i class="bi bi-book-fill text-4xl mb-2"></i>
                    <h3 class="text-sm font-semibold text-black mb-1">Joi Seara</h3>
                    <p class="text-xl text-gray-600">19:00</p>
                </div>

                <div
                    class="bg-white/90 border border-brand-gold hover:border-brand-blue-navy text-brand-gold hover:text-brand-blue-navy rounded-xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-md">
                    <i class="bi bi-people-fill text-4xl mb-2"></i>
                    <h3 class="text-sm font-semibold text-black mb-1">Vineri Tineret</h3>
                    <p class="text-xl text-gray-600">18:00</p>
                </div>

            </div>
        </div>

        <!-- IMAGE -->
        <div
            class="flex-1 w-full md:max-w-7xl relative h-[22rem] sm:h-[26rem] md:h-[32rem] overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-2xl shadow-xl shine-hover">
            <img :src="Image2" alt="Providenta" class="w-full h-full object-cover object-center rounded-2xl" />
        </div>
    </div>
</template>

<style scoped></style>
