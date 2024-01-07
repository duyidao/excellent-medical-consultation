import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'layout',
      component: () => import('../views/Layout/index.vue'),
      children: [
        { // 首页
          path: 'home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: () => import('../views/Home/index.vue')
        },
        { // 个人中心
          path: 'user',
          name: 'user',
          meta: {
            title: '个人中心'
          },
          component: () => import('../views/User/index.vue')
        },
        { // 问诊室
          path: 'room',
          name: 'room',
          meta: {
            title: '问诊室'
          },
          component: () => import('../views/Room/index.vue')
        },
        { // 健康百科
          path: 'article',
          name: 'article',
          meta: {
            title: '健康百科'
          },
          component: () => import('../views/Article/index.vue')
        },
        { // 消息通知
          path: 'notify',
          name: 'notify',
          meta: {
            title: '消息通知'
          },
          component: () => import('../views/Notify/index.vue')
        },
      ]
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        title: '订单'
      },
      component: () => import('../views/Order/index.vue')
    },
    {
      path: '/user/patient',
      name: 'patient',
      component: () => import('../views/User/patient.vue'),
      meta: { title: '家庭档案' }
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('../views/Login/index.vue')
    }
  ]
})

NProgress.configure({
  showSpinner: false
})

// 访问权限控制
router.beforeEach((to) => {
  NProgress.start()
  // 用户仓库
  const store = useUserStore()
  // 不需要登录的页面，白名单
  const whiteList = ['/login', '/404']
  // 如果没有登录且不在白名单内，去登录
  if (!whiteList.includes(to.path) && !store.user?.token) return '/login'
  // 否则不做任何处理
})

// 标题修改
router.afterEach((to) => {
  document.title = to.meta.title || '刀刀问诊'
  NProgress.done()
})

export default router
