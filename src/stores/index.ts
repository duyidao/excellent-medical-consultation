import persist from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

// pinia实现数据持久化
const pinia = createPinia().use(persist)

// 按需统一导出所有状态仓库
export * from './modules/user'
export * from './modules/consult'

// 导出pinia
export default pinia