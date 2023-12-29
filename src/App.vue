<script setup lang="ts">
import { Button as VanButton } from 'vant'
</script>

<template>
  <van-button type="primary">按钮</van-button>
  <a href="#">123</a>
</template>

<style lang="scss" scoped>
// 使用 css 变量
a {
  color: var(--cp-primary);
}
</style>
