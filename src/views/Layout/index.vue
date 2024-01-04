<script setup lang="ts">
import MySvgIcon from '@/components/MySvgIcon.vue'
</script>

<template>
    <div class="layout-page">
        <router-view></router-view>
        <van-tabbar route>
            <van-tabbar-item to="/home">
                首页
                <template #icon="{ active }">
                    <my-svg-icon :name="`home-index-${active ? 'active' : 'default'}`" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/article">
                健康百科
                <template #icon="{ active }">
                    <my-svg-icon :name="`home-article-${active ? 'active' : 'default'}`" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/notify">
                消息中心
                <template #icon="{ active }">
                    <my-svg-icon :name="`home-notice-${active ? 'active' : 'default'}`" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/user">
                我的
                <template #icon="{ active }">
                    <my-svg-icon :name="`home-mine-${active ? 'active' : 'default'}`" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="scss" scoped>
.layout-page {
    :deep() {
        .van-tabbar-item {
            &__icon {
                font-size: 21px;
            }

            &__text {
                font-size: 11px;
            }

            &:not(.van-tabbar-item--active) {
                color: var(--cp-text3);
            }
        }
    }
}
</style>
