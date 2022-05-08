import { createApp } from 'vue'
import App from './App.vue'
import "./scss/app.scss"
import responsive from './components/notResponsive.vue'
import router from './router'


createApp(App).use(router).mount('#app')
createApp(responsive).use(router).mount('#notResponsive')
