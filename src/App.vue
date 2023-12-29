<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores/user'

const store = useUserStore()

store.setUser({
  token: '12345',
  id: '1',
  account: 'daodao',
  mobile: '18898664929',
  avatar: ''
})
</script>

<template>
  <div>{{ store.user }}</div>
  <van-button type="primary" @click="store.delUser">退出</van-button>
</template>

<style lang="scss" scoped>
// 使用 css 变量
a {
  color: var(--cp-primary);
}
</style>
