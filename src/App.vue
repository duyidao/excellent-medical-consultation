<script setup lang="ts">
import { request } from '@/utils/network/index'
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
import type { User } from '@/types/user'

const store = useUserStore()

const login = async () => {
  const res = await request<User>('/login/password', 'post', {
    mobile: "13211112222",
    password: "abc12345"
  })
  store.setUser(res.data);
}

const getUserInfo = async () => {
  const res = await request('/patient/myUser')
  console.log(res)
}
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
// 使用 css 变量
a {
  color: var(--cp-primary);
}
</style>
