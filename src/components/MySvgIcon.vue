<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <svg aria-hidden="true" class="svg-icon">
        <!-- #icon-文件夹名称-图片名称 -->
        <use :href="`#icon-${name}`" />
    </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
    // 和字体一样大
    width: 1em;
    height: 1em;
}
</style>