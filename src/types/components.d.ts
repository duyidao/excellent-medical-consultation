import MyNavBar from '@/components/MyNavBar.vue'
import MySvgIcon from '@/components/MySvgIcon.vue'

declare module 'vue' {
  interface GlobalComponents {
    MyNavBar: typeof MyNavBar
    MySvgIcon: typeof MySvgIcon
  }
}