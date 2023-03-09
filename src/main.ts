import { createApp } from 'vue'
import Aphrc from './Aphrc.vue'
import './registerServiceWorker'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import '@/plugins'

const app = createApp(Aphrc)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')