<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase/firebase.js'
import { collection, query, getDocs } from 'firebase/firestore'

const events = ref([])
const isMobile = ref(false)
const message = ref('Apasă butonul')

// 📌 Funcție sigură care transformă data fie din Timestamp, fie din string:
const getEventDate = (evDate) => {
    return evDate?.toDate ? evDate.toDate() : new Date(evDate)
}

// 📌 Fetch evenimente din Firestore
const fetchEvents = async () => {
    const today = new Date()
    const eventsRef = collection(db, 'events')
    const querySnapshot = await getDocs(eventsRef)

    const filtered = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .map(ev => ({
            ...ev,
            dateObj: getEventDate(ev.date)   // 👉 salvăm data ca obiect real
        }))
        .filter(ev => ev.dateObj >= today)   // 👉 aici filtrăm viitoare
        .sort((a, b) => a.dateObj - b.dateObj) // 👉 sortare corectă
        .slice(0, 4) // 👉 primele 4 evenimente

    events.value = filtered.map((data, index) => ({
        id: data.id,
        day: data.dateObj.getDate(),
        shortMonth: data.dateObj.toLocaleString('en', { month: 'short' }),
        date: data.dateObj.toLocaleDateString('ro-RO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        title: data.title,
        description: data.description,
        image: data.image,
        tags: data.tags || [],
        time: data.time,
        location: data.location,
        hovered: index === 0
    }))

    console.log('Evenimente încărcate:', events.value)
}

// 🧪 Test Firestore (opțional)
// const testFirestore = async () => {
//     try {
//         const querySnapshot = await getDocs(collection(db, 'events'))
//         message.value = `Documente găsite: ${querySnapshot.size}`
//     } catch (error) {
//         message.value = '❌ EROARE: ' + error.message
//     }
// }

const checkScreen = () => {
    isMobile.value = window.innerWidth < 768
}

onMounted(() => {
    fetchEvents()
    checkScreen()
    window.addEventListener('resize', checkScreen)
})
</script>


<template>
    <div class="container mx-auto p-4 md:p-8 py-0 md:py-0 mt-20">
        <!-- Test Firestore -->
        <!-- <div class="p-6">
            <button @click="testFirestore" class="bg-blue-500 text-white p-3 rounded">
                Test Firestore
            </button>
            <p class="mt-4">{{ message }}</p>
        </div> -->

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

                    <!-- Info suplimentar -->
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
