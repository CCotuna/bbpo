<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const events = ref([
    {
        id: 1,
        day: 19,
        shortMonth: 'Oct',
        date: 'Octombrie 19, 2025',
        title: 'Ziua Mulțumirii și Recunoștinței',
        description: 'O zi specială dedicată recunoștinței și rugăciunii în comunitatea noastră.',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?fm=jpg&q=60&w=3000',
        tags: ['Rugăciune', 'Ziua Mulțumirii'],
        time: '10:00 AM - 12:00 PM',
        location: 'Biserica Providența, Oradea',
        hovered: true
    },
    {
        id: 2,
        day: 2,
        shortMonth: 'Nov',
        date: 'Noiembrie 2, 2025',
        title: 'Cina Domnului',
        description: 'Ocazie specială de părtășie și reflecție spirituală.',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?fm=jpg&q=60&w=3000',
        tags: ['Cina', 'Părtășie'],
        time: '5:00 PM - 6:30 PM',
        location: 'Biserica Providența, Oradea',
    },
    {
        id: 3,
        day: 9,
        shortMonth: 'Nov',
        date: 'Noiembrie 9, 2025',
        title: 'Botez Nou Testamentar',
        description: 'Un moment de bucurie și celebrare a credinței noastre.',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?fm=jpg&q=60&w=3000',
        tags: ['Botez', 'Mărturie'],
        time: '10:00 AM - 12:00 PM',
        location: 'Biserica Providența, Oradea',
    },
    {
        id: 4,
        day: 7,
        shortMonth: 'Dec',
        date: 'Decembrie 7, 2025',
        title: 'Cina Domnului',
        description: 'O ocazie specială de părtășie și reflecție spirituală.',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?fm=jpg&q=60&w=3000',
        tags: ['Cina', 'Părtășie'],
        time: '5:00 PM - 6:30 PM',
        location: 'Biserica Providența, Oradea',
    }
])

const isMobile = ref(false)
const checkScreen = () => {
    isMobile.value = window.innerWidth < 768
}

onMounted(() => {
    checkScreen()
    window.addEventListener('resize', checkScreen)
})
onUnmounted(() => {
    window.removeEventListener('resize', checkScreen)
})
</script>

<template>
    <div class="container mx-auto p-4 md:p-8 py-0 md:py-0 mt-20">
        <div class="flex flex-col items-center mb-8">
            <h2
                class="text-gray-900 text-3xl sm:text-4xl lg:text-6xl font-extrabold uppercase mb-4 font-bebas-neue leading-tight">
                Evenimente <span class="text-brand-gold">viitoare</span>
            </h2>
            <p class="text-xl text-gray-600 text-center">Descoperă programul și detaliile evenimentelor viitoare</p>
        </div>

        <div class="space-y-6 max-w-7xl mx-auto">
            <div class="space-y-8 animate-fade-ins">
                <div v-for="event in events" :key="event.id" :class="[
                    'flex flex-col lg:flex-row rounded-3xl p-4 transition duration-300',
                    event.hovered ? 'bg-brand-blue-navy text-white' : 'bg-white hover:bg-brand-blue-navy hover:text-white'
                ]">

                    <!-- Imagine -->
                    <div class="flex-shrink-0 w-full lg:w-1/4 h-42 overflow-hidden rounded-2xl shine-hover">
                        <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" draggable="false"
                            oncontextmenu="return false;" />
                    </div>

                    <!-- Conținut -->
                    <div class="flex-grow p-4 lg:px-6 flex flex-col justify-between">
                        <div>
                            <p class="text-md font-medium mb-1">{{ event.date }}</p>
                            <p class="text-2xl sm:text-3xl uppercase mb-3 font-bebas-neue tracking-[0.06em]">{{
                                event.title }}</p>
                            <p class="text-sm mt-1">{{ event.description }}</p>
                        </div>
                        <div class="mt-4">
                            <a href="#" class="text-sm font-semibold uppercase hover:underline">More Details</a>
                        </div>
                    </div>

                    <!-- Info suplimentar cu Bootstrap Icons -->
                    <div
                        class="flex-shrink-0 w-full lg:w-1/4 pt-4 lg:pt-0 lg:pl-6 border-t lg:border-t-0 lg:border-l space-y-3 lg:flex lg:flex-col lg:justify-center">
                        <p class="flex items-center text-sm font-medium">
                            <i class="bi bi-tags-fill mr-2"></i>
                            Tags:
                            <span class="ml-2 flex flex-wrap gap-2">
                                <span v-for="(tag, i) in event.tags" :key="i"
                                    class="bg-brand-gold text-black text-xs px-2 py-1 rounded-full">{{ tag }}</span>
                            </span>
                        </p>

                        <p class="flex items-center text-sm font-medium">
                            <i class="bi bi-clock-fill mr-2"></i>
                            Time: <span class="ml-1">{{ event.time }}</span>
                        </p>

                        <p class="flex items-center text-sm font-medium">
                            <i class="bi bi-geo-alt-fill mr-2"></i>
                            Location: <span class="ml-1">{{ event.location }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 0.5s ease-in-out;
}
</style>
