<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
// 父子传参
// eslint-disable-next-line vue/valid-define-props
const props = defineProps<{
    title?: string
    leftText?: string
    rightText?: string
    back?: () => void
}>()
const emit = defineEmits<{
    (e: 'click-left' | 'click-right'): void
}>()

// 点击左侧按钮
const onClickLeft = () => {
    // 如果传了back回调，则调用back回调
    if (props.back) return props.back()
    // 判断历史记录中是否有回退
    if (history.state?.back) {
        router.back()
    } else {
        router.push('/')
    }

    emit('click-left')
}
// 点击右侧按钮
const onClickRight = () => {
    emit('click-right')
}
</script>

<template>
    <van-nav-bar :title="props.title"
        left-text="返回"
        :right-text="props.rightText"
        left-arrow
        fixed
        @click-left="onClickLeft"
        @click-right="onClickRight" />
</template>

<style lang="scss" scoped>
:deep() {
    .van-nav-bar {
        &__arrow {
            font-size: 18px;
            color: var(--cp-text1);
        }

        &__text {
            font-size: 15px;
        }
    }
}
</style>