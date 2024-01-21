<script setup lang="ts">
import { getAllDep } from '@/services/consult'
import type { TopDep } from '@/types/consult'
import { onMounted, ref, computed } from 'vue'
import MyNavBar from '@/components/MyNavBar.vue';
import { useConsultStore } from '@/stores'

const store = useConsultStore()

const active = ref(0)

// 一级科室
const allDep = ref<TopDep[]>([])
const getList = async () => {
    const res = await getAllDep()
    allDep.value = res.data
}

onMounted(() => getList())

// 获取二级科室
const subDep = computed(() => allDep.value[active.value]?.child || [])
</script>

<template>
    <div class="consult-dep-page">
        <MyNavBar title="选择科室" />
        <div class="wrapper">
            <van-sidebar v-model="active">
                <van-sidebar-item v-for="item in allDep"
                    :key="item.id"
                    :title="item.name" />
            </van-sidebar>
            <div class="sub-dep">
                <template v-if="subDep.length > 0">
                    <router-link v-for="item in subDep"
                        :key="item.id"
                        to="/consult/illness"
                        @click="store.setDep(item.id)">{{ item.name }}</router-link>
                </template>
                <van-empty v-else
                    image="error"
                    description="暂无数据" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.van-sidebar {
    width: 114px;

    &-item {
        padding: 14px;
        color: var(--cp-tag);

        &--select {
            color: var(--cp-main);
            font-weight: normal;

            &::before {
                display: none;
            }
        }
    }
}

.consult-dep-page {
    padding-top: 46px;

    .wrapper {
        height: calc(100vh - 46px);
        overflow: hidden;
        display: flex;

        .sub-dep {
            flex: 1;
            height: 100%;
            overflow-y: auto;

            >a {
                display: block;
                padding: 14px 30px;
                color: var(--cp-dark);
            }
        }
    }
}
</style>
