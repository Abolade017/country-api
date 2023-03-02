import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Header from './components/Header.vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.component(' Header', Header)

app.mount('#app')
