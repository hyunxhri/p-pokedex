import { createApp } from 'vue'
import router from '@/router/Router.js'
import { library } from '@fortawesome/fontawesome-svg-core' // Import library
import { fas } from '@fortawesome/free-solid-svg-icons' // Import solid icons
import App from './App.vue'

library.add(fas)
const app = createApp(App)
app.use(router)
app.mount('#app')
