<script setup>
import QRCodeImage from '@/assets/QRCode2.svg';
</script>

<template>
    <section class="relative py-16 md:py-12 bg-gradient-to-b from-white to-yellow-50">
        <div class="max-w-[120rem] mx-auto px-4 md:px-8">

            <!-- TITLU -->
            <h2
                class="text-gray-900 text-4xl sm:text-5xl lg:text-5xl font-extrabold uppercase mb-10 font-bebas-neue leading-tight text-center">
                Sprijină <span class="text-brand-gold">Biserica Providența</span>
            </h2>

            <!-- CARD DONATII -->
            <div
                class="max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-brand-green rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl hover:shadow-2xl transition-shadow duration-500">

                <!-- TEXT SCURT -->
                <div class="flex-1 text-center md:text-left">
                    <p class="text-gray-800 text-lg mb-4">
                        Contribuie la misiunea noastră și susține activitățile bisericii. Donațiile tale ne ajută să
                        organizăm evenimente, să sprijinim comunitatea și să aducem mai multă speranță în viața
                        oamenilor.
                    </p>
                    <p class="text-gray-800 text-lg mb-6">
                        Fiecare contribuție contează și ne apropie de obiectivele noastre spirituale.
                    </p>

                    <!-- BUTON DONEAZA -->
                    <a href="https://providentaoradea.shopia.ro/" target="_blank"
                        class="inline-block px-8 py-4 bg-brand-gold text-brand-blue-navy font-bold uppercase rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
                        Donează
                    </a>
                </div>

                <!-- QR CODE MARE -->
                <div class="flex-shrink-0 flex justify-center items-center">
                    <img :src="QRCodeImage" alt="QR Code pentru donații"
                        class="w-48 h-48 md:w-60 md:h-60 object-contain hover:scale-105 transition-transform duration-300" />
                </div>

            </div>
        </div>
    </section>
</template>
