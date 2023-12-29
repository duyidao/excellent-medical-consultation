import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 样式全局使用
import 'vant/lib/index.css'
import './styles/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
