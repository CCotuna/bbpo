<script setup>
import Navbar from '@/components/navigation/NavigationBar.vue'
import MobileNavigationBar from '@/components/navigation/MobileNavigationBar.vue'
import Footer from './components/navigation/Footer.vue';
</script>

<template>
  <main class="h-full min-h-screen">
    <Navbar class="hidden md:block" />
    <MobileNavigationBar class="block md:hidden" />
    <RouterView />
    <Footer />
  </main>
</template>
