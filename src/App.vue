<script setup lang="ts">
</script>

<template>
    <router-view></router-view>
    <svg aria-hidden="true">
      <!-- #icon-文件夹名称-图片名称 -->
      <use href="#icon-login-eye-off" />
    </svg>
</template>

<style lang="scss" scoped>
// 使用 css 变量
a {
  color: var(--cp-primary);
}
</style>
