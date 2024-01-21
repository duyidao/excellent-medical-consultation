<script setup lang="ts">
import DoctorCard from './DoctorCard.vue'
import { onMounted, ref } from 'vue'
import type { DoctorList } from '@/types/consult'
import { useWindowSize } from '@vueuse/core'
import {getDoctorPage} from '@/services/consult'

const { width } = useWindowSize()

const list = ref<DoctorList>()
onMounted(async () => {
    const res = await getDoctorPage({
        current: 1,
        pageSize: 5
    })
    console.log(res)
    list.value = res.data.rows
})

// const width = ref(0)
// const setWidth = () => width.value = window.innerWidth // 获取屏幕宽度

// // 页面加载，给窗口绑定折叠事件
// onMounted(() => {
//     setWidth()
//     window.addEventListener('resize', setWidth)
// })
// // 页面卸载，给窗口取消绑定折叠事件
// onUnmounted(() => {
//     window.removeEventListener('resize', setWidth)
// })

</script>

<template>
    <div class="follow-doctor">
        <div className="head">
            <p>推荐关注</p>
            <a href="javascript:;"> 查看更多<i class="van-icon van-icon-arrow"></i></a>
        </div>
        <div class="body">
            <!-- swipe 组件 -->
            <van-swipe v-if="list?.length" :width="(150 / 375) * width"
                :show-indicators="false"
                :loop="false">
                <van-swipe-item v-for="item in list"
                    :key="item.id">
                    <doctor-card :item="item" />
                </van-swipe-item>
            </van-swipe>
            <van-empty v-else image="error" description="暂无数据" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.follow-doctor {
    background-color: var(--cp-bg);
    height: 250px;

    ::v-deep .van-empty {
        padding: 0;
    }

    .head {
        display: flex;
        justify-content: space-between;
        height: 45px;
        align-items: center;
        padding: 0 15px;
        font-size: 13px;

        >a {
            color: var(--cp-tip);
        }
    }

    .body {
        width: 100%;
        overflow: hidden;
    }
}
</style>
