import MyNavBar from '@/components/MyNavBar.vue'

declare module 'vue' {
  interface GlobalComponents {
    MyNavBar: typeof MyNavBar
  }
}