import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/Layout/index.vue'),
      children: [
        {
          redirect: 'home',
          path: ''
        },
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

export default router
