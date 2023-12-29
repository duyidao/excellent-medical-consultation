import './assets/main.css'
import persist from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 样式全局使用
import 'vant/lib/index.css'
import './styles/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// pinia实现数据持久化
app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
