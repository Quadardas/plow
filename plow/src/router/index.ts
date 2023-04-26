import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginPage from '@/pages/LoginPage.vue'
import WorkerPage from '@/pages/WorkerPage.vue'
import CreateTask from '@/components/modals/CreateTask.vue';
import UserCreate from "@/pages/UserCreate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/taskList', component: () => HomeView },
    { path: '/login', component: () => LoginPage},
    { path: '/workers', component: () => WorkerPage},
    {path: "/createUser", component:()=> UserCreate},
   
  ]
})

export default router
