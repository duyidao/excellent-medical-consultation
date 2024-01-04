import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores'

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
          component: () => import('../views/Home/index.vue')
        },
        { // 个人中心
          path: 'user',
          name: 'user',
          component: () => import('../views/User/index.vue')
        },
        { // 问诊室
          path: 'room',
          name: 'room',
          component: () => import('../views/Room/index.vue')
        },
        { // 健康百科
          path: 'article',
          name: 'article',
          component: () => import('../views/Article/index.vue')
        },
        { // 消息通知
          path: 'notify',
          name: 'notify',
          component: () => import('../views/Notify/index.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/index.vue')
    }
  ]
})

// 访问权限控制
router.beforeEach((to) => {
  // 用户仓库
  const store = useUserStore()
  // 不需要登录的页面，白名单
  const whiteList = ['/login', '/404']
  // 如果没有登录且不在白名单内，去登录
  if (!whiteList.includes(to.path) && !store.user?.token) return '/login'
  // 否则不做任何处理
})

export default router
