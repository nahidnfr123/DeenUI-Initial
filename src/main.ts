import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DeenUI from "@/DeenUI";

import './assets/scss/main.scss'
// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DeenUI)

app.mount('#app')
