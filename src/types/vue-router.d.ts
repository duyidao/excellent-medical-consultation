import 'vue-router'

declare module 'vue' {
  // 扩展 元信息类型
  interface RouteMeta {
    // 标题
    title?: string
  }
}