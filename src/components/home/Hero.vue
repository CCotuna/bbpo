<script setup>
import { ref, computed } from 'vue'
import BGImage from "@/assets/Hero.jpeg"
import RotatingBadge from "@/components/svgs/RotatingBadge.vue"
import Logo from "@/components/logo/Logo.vue"

// Import componentele pentru tabs
import ProgramTab from '@/components/home/ProgramTab.vue'
import ContactTab from '@/components/home/ContactTab.vue'
import DonationTab from '@/components/home/DonationTab.vue'
import FAQTab from '@/components/home/FAQTab.vue'

const selectedIndex = ref(0)

const churchFaqs = [
    {
        question: "La ce oră au loc serviciile de duminică?",
        answer:
            "Serviciile principale au loc în fiecare duminică de la ora 10:00 dimineața. De asemenea, avem și o întâlnire de seară începând cu ora 17:00.",
    },
    {
        question: "Trebuie să fiu membru al bisericii pentru a participa?",
        answer:
            "Nu, oricine este binevenit! Indiferent dacă faci parte sau nu din biserică, poți participa la toate întâlnirile și evenimentele noastre.",
    },
    {
        question: "Cum pot deveni membru al bisericii?",
        answer:
            "Pentru a deveni membru, te poți înscrie la cursul introductiv de credință și apartenență, care are loc o dată pe lună. După finalizare, poți completa o cerere oficială de membru.",
    },
    {
        question: "Există posibilitatea de a face donații online?",
        answer:
            "Da, acceptăm donații online prin card bancar sau transfer direct. Toate detaliile se regăsesc pe pagina noastră de 'Donații'.",
    },
    {
        question: "Cum pot să mă implic în activitățile bisericii?",
        answer:
            "Poți alege să te alături uneia dintre echipele noastre de voluntari – muzică, media, copii, primire sau evenimente. Trimite-ne un mesaj și îți vom găsi locul potrivit!",
    },
    {
        question: "Unde se află biserica?",
        answer:
            "Ne găsești pe Strada Ciheiului nr. 40, Oradea. Parcarea este gratuită, iar stațiile de transport public sunt la 5 minute de mers pe jos.",
    },
];

const tabsData = ref([
    { id: 'program', navTitle: 'Program', component: ProgramTab },
    { id: 'locatie', navTitle: 'Locatie', component: ContactTab },
    {
        id: 'faq',
        navTitle: 'Intrebari frecvente',
        component: FAQTab,
        props: {
            subtitle: "Întrebări frecvente",
            title: "DESPRE BISERICA|PROVIDENTA",
            description:
                "Dacă ești nou la biserica noastră sau vrei să te implici mai mult, aici găsești răspunsuri la cele mai frecvente întrebări despre slujbe, voluntariat și viața comunității.",
            buttonText: "VEZI TOATE ÎNTREBĂRILE",
            buttonLink: "/about-page",
            faqs: churchFaqs,
        },
    },
    { id: 'doneaza', navTitle: 'Doneaza', component: DonationTab },
])

const currentTab = computed(() => tabsData.value[selectedIndex.value])
</script>

<template>
    <!-- HERO SECTION -->
    <section class="relative flex flex-col items-center justify-center text-center h-screen w-full overflow-hidden">
        <!-- BACKGROUND IMAGE -->
        <div class="absolute inset-0 bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${BGImage})` }">
        </div>
        <div class="absolute inset-0 bg-black/70"></div>

        <!-- MAIN TEXT -->
        <div class="relative z-10 flex flex-col items-center px-4">
            <h1
                class="relative text-6xl md:text-8xl font-bebas-neue leading-tight max-w-4xl text-white gradient-text animate-gradient">
                Împreună pentru Hristos
            </h1>
            <p class="text-xl md:text-2xl font-ovo mt-4 max-w-xl text-white">
                Te invităm să trăiești credința într-un mod autentic.
            </p>
        </div>

        <!-- ROTATING BADGE -->
        <div class="hidden md:block absolute bottom-10 right-10 z-10 animate-float">
            <RotatingBadge :size="140" circular-text1="• BISERICA PROVIDENTA •"
                circular-text2="• CREDINTA • INCHINARE •" duration="12s">
                <template #logo>
                    <Logo :size="55" :color="'white'" />
                </template>
            </RotatingBadge>
        </div>

        <!-- TABS AT BOTTOM LEFT OF HERO -->
        <div class="absolute bottom-8 left-0 z-20 mb-6
         md:left-10 md:bottom-0
         w-full md:w-auto
         px-4 md:px-0">
            <nav class="flex md:space-x-4
             justify-between md:justify-start
             bg-black/40 md:bg-transparent
             backdrop-blur-md md:backdrop-blur-0
             py-3 md:py-0
             px-4 md:px-0
             rounded-t-xl md:rounded-none">
                <button v-for="(tab, index) in tabsData" :key="tab.id" @click="selectedIndex = index" class="relative uppercase text-white font-semibold
                   text-xs md:text-sm pb-1 transition-all duration-300 
                   hover:text-brand-gold cursor-pointer flex-1 md:flex-none text-center"
                    :class="selectedIndex === index ? 'text-brand-gold font-bold' : ''">
                    {{ tab.navTitle }}

                    <span
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transition-transform duration-300 ease-out hidden md:block"
                        :class="selectedIndex === index ? 'scale-x-100' : 'scale-x-0'"></span>
                </button>
            </nav>
        </div>
    </section>

    <!-- <div class="block md:hidden absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-30 animate-float">
        <RotatingBadge :size="140" circular-text1="• BISERICA PROVIDENTA •" circular-text2="• CREDINTA • INCHINARE •"
            duration="12s">
            <template #logo>
                <Logo :size="55" :color="'white'" />
            </template>
        </RotatingBadge>
    </div> -->

    <!-- TABS CONTENT BELOW HERO -->
    <section class="relative w-full py-12 pt-0 md:pt-12">
        <div class="mx-auto px-4 sm:px-6 md:px-12">
            <!-- Render componentul corespunzator tab-ului selectat -->
            <component :is="currentTab.component" v-bind="currentTab.props || {}" />
        </div>
    </section>
</template>

<style scoped>
/* Animatie badge */
@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }

    100% {
        transform: translateY(0);
    }
}

.animate-float {
    animation: float 5s ease-in-out infinite;
}

/* Gradient text animat */
.gradient-text {
    background: linear-gradient(90deg, #ffffff, #ffd064, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 900;
}

@keyframes gradientMove {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    background-size: 200% auto;
    animation: gradientMove 3s ease-in-out infinite;
}

/* Tab underline animation */
.scale-x-0 {
    transform: scaleX(0);
}

.scale-x-100 {
    transform: scaleX(1);
}
</style>
