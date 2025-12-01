<script setup>
import Logo from '@/components/logo/Logo.vue';
</script>
<template>
    <footer class="tracking-wide" :class="currentRoutePath === '/vector' ? 'bg-black' : 'bg-white mt-10'">

        <!-- Social icons (Bootstrap Icons) -->
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-brand-charcoal-grey-light">
            <div class="flex items-center justify-start space-x-4">
                <a v-for="social in socialLinks" :key="social.icon" :href="social.url" target="_blank"
                    rel="noopener noreferrer" class="text-4xl p-2 hover:text-brand-gold transition-all duration-200"
                    :class="currentRoutePath === '/vector' ? 'text-white' : 'text-brand-navy'">

                    <i :class="`bi bi-${social.icon}`"></i>
                </a>
            </div>
        </div>

        <!-- SVG separator -->
        <svg v-if="currentRoutePath !== '/vector'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
            style="transform: rotate(180deg)">
            <path
                d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z"
                fill="#ffd064"></path>
        </svg>

        <!-- Bottom section -->
        <div :class="[
            currentRoutePath === '/vector'
                ? 'bg-black text-white -mt-1'
                : 'bg-[#ffd064] text-black -mt-1',
            'pt-10 text-sm'
        ]">

            <div class="container mx-auto px-4 sm:px-6 lg:px-0">
                <div class="flex flex-col items-center text-center gap-8
                    md:flex-row md:justify-between md:items-center md:text-left">

                    <!-- Logo + details -->
                    <div class="flex flex-col items-center md:flex-row md:items-start text-center md:text-left gap-6">
                        <RouterLink to="/" class="mb-4 me-5">
                            <Logo :size="140" :color="currentRoutePath === '/vector' ? '#FFFFFF' : '#000000'" />
                        </RouterLink>

                        <div class="text-center md:text-left">
                            <div class="text-4xl font-bold leading-tight">
                                Biserica Baptistă Providența Oradea
                            </div>
                            <div class="text-lg mt-2 space-y-1 opacity-90">
                                <div>Str. Ciheiului nr. 40, Oradea, BH</div>
                                <div>secretariat@providentaoradea.ro</div>
                                <div>0359 414 142</div>

                            </div>
                        </div>
                    </div>

                    <!-- Legal + program -->
                    <div class="flex flex-col items-center md:items-end text-center md:text-right gap-3">

                        <div
                            class="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-end gap-4 md:gap-x-4">
                            <RouterLink v-for="link in legalLinks" :key="link.label" :to="{ name: link.to }"
                                class="hover:text-brand-gold transition-colors duration-200">
                                {{ link.label }}
                            </RouterLink>
                        </div>

                        <div>
                            <div class="font-semibold text-brand-navy text-xl mb-1">Program</div>
                            <ul class="text-base leading-7">
                                <li>Duminică: <span class="font-medium">10:00 & 17:00</span></li>
                                <li>Joi: <span class="font-medium">19:00</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <p class="py-6 pb-2 text-base text-center opacity-90">
                © {{ new Date().getFullYear() }} Biserica Baptistă Providența Oradea.
                <br class="flex md:hidden" />
                Toate drepturile rezervate.
            </p>

        </div>
    </footer>
</template>
