import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginPage from '@/pages/LoginPage.vue'
import WorkerPage from '@/pages/WorkerPage.vue'
import CreateTask from '@/components/modals/CreateTask.vue';
import UserCreate from "@/pages/UserCreate.vue";
import ProjectList from "@/pages/ProjectList.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/projects/:id', component: () => HomeView },
    { path: '/login', component: () => LoginPage},
    { path: '/workers', component: () => WorkerPage},
    {path: "/createUser", component: ()=> UserCreate},
    {path: '/projects', component: ()=> ProjectList}
  ]
})

export default router
