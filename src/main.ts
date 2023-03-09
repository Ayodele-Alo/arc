import { createApp } from 'vue'
import Aphrc from './Aphrc.vue'
import './registerServiceWorker'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import '@/plugins'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(Aphrc)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(store).use(router).mount('#app')