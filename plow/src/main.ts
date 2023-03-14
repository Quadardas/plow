import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import axios from './plugins/axios';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios, {
  baseUrl: 'http://19ivt.ru:8080/api',
})

app.mount('#app')
