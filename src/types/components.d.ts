import MyNavBar from '@/components/MyNavBar.vue'
import MySvgIcon from '@/components/MySvgIcon.vue'
import MyRadioBtn from '@/components/MyRadioBtn.vue'

declare module 'vue' {
  interface GlobalComponents {
    MyNavBar: typeof MyNavBar
    MySvgIcon: typeof MySvgIcon
    MyRadioBtn: typeof MyRadioBtn
  }
}