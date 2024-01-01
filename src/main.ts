import { createApp } from 'vue'
import pinia from './stores/index'
// 样式全局使用
import 'vant/lib/index.css'
import './styles/main.scss'

import App from './App.vue'
import router from './router'
import useVantComp from './vantCompUse'

const app = createApp(App)
useVantComp(app);
app.use(pinia)
app.use(router)
app.mount('#app')
