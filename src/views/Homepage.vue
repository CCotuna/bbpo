<script setup>
import Hero from '../components/home/Hero.vue';
import EventsFirebase from '../components/home/EventsFirebase.vue';
import SocialMedia from '../components/home/SocialMedia.vue';
import MinistryGroups from '../components/home/MinistryGroups.vue';
// import { seedEvents } from '@/components/utils/seedEvents'
</script>
<template>
    <div>
        <Hero />
        <!-- <button @click="seedEvents" class="bg-brand-gold text-brand-blue-navy px-4 py-2 rounded-lg">
            Inserare 5 evenimente în Firebase
        </button> -->
        <EventsFirebase />
        <SocialMedia instagram-link="https://www.instagram.com/providentaoradea"
            facebook-link="https://www.facebook.com/profile.php?id=100064869333062" />
        <MinistryGroups />
    </div>
</template>
<style scoped></style>