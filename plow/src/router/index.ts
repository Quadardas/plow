import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginPage from '@/pages/LoginPage.vue'
import WorkerPage from '@/pages/WorkerPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => HomeView },
    { path: '/login', component: () => LoginPage},
    { path: '/workers', component: () => WorkerPage}
  ]
})

export default router
