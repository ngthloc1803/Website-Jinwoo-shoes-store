import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const mainApp = createApp(App)
mainApp.use(router)
mainApp.mount('#app')


