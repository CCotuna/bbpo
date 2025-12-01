import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router;
