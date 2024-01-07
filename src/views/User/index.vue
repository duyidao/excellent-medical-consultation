<script setup lang="ts">
import MySvgIcon from "@/components/MySvgIcon.vue";
import { getUserInfo } from '@/services/user'
import type { UserInfo } from '@/types/user'
import { useUserStore } from '@/stores/index'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { showConfirmDialog } from 'vant'

// 获取用户数据
const user = ref<UserInfo>()
onMounted(async () => {
    const res = await getUserInfo()
    user.value = res.data
})

const tools = [
    { label: '我的问诊', path: '/user/consult' },
    { label: '我的处方', path: '/' },
    { label: '家庭档案', path: '/user/patient' },
    { label: '地址管理', path: '/user/address' },
    { label: '我的评价', path: '/' },
    { label: '官方客服', path: '/' },
    { label: '设置', path: '/' }
]

// 退出登录
const userStore = useUserStore()
const router = useRouter()
const logoutFn = async () => {
    await showConfirmDialog({
        title: '温馨提示',
        message: '您确认要退出优医问诊吗？'
    })
    userStore.delUser()
    router.push('/login')
}
</script>

<template>
    <div class="user-page">
        <div class="user-page-head">
            <div class="top">
                <van-image round
                    fit="cover"
                    :src="user?.avatar" />
                <div class="name">
                    <p>{{ user?.account }}</p>
                    <p><van-icon name="edit" /></p>
                </div>
            </div>
            <van-row>
                <van-col span="6">
                    <p>{{ user?.collectionNumber }}</p>
                    <p>收藏</p>
                </van-col>
                <van-col span="6">
                    <p>{{ user?.likeNumber }}</p>
                    <p>关注</p>
                </van-col>
                <van-col span="6">
                    <p>{{ user?.score }}</p>
                    <p>积分</p>
                </van-col>
                <van-col span="6">
                    <p>{{ user?.couponNumber }}</p>
                    <p>优惠券</p>
                </van-col>
            </van-row>
        </div>
        <div class="user-page-order">
            <div class="head">
                <h3>药品订单</h3>
                <router-link to="/order">全部订单 <van-icon name="arrow" /></router-link>
            </div>
            <van-row>
                <van-col span="6">
                    <MySvgIcon name="user-paid" />
                    <p>待付款</p>
                </van-col>
                <van-col span="6">
                    <MySvgIcon name="user-shipped" />
                    <p>待发货</p>
                </van-col>
                <van-col span="6">
                    <MySvgIcon name="user-received" />
                    <p>待收货</p>
                </van-col>
                <van-col span="6">
                    <MySvgIcon name="user-finished" />
                    <p>已完成</p>
                </van-col>
            </van-row>
        </div>
        <div class="user-page-group">
            <h3>快捷工具</h3>
            <van-cell v-for="(item, i) in tools"
                :key="item.label"
                :title="item.label"
                :to="item.path"
                is-link
                :border="false">
                <template #icon><MySvgIcon :name="`user-tool-0${i + 1}`" /></template>
            </van-cell>
        </div>
        <a class="logout"
            href="javascript:;"
            @click="logoutFn">退出登录</a>
    </div>
</template>

<style lang="scss" scoped>
.user-page {
    background-color: var(--cp-bg);
    min-height: calc(100vh - 50px);
    padding: 0 15px 65px;

    // 头部
    &-head {
        height: 200px;
        background: linear-gradient(180deg, rgba(44, 181, 165, 0.46), rgba(44, 181, 165, 0));
        margin: 0 -15px;
        padding: 0 15px;

        .top {
            display: flex;
            padding-top: 50px;
            align-items: center;

            .van-image {
                width: 70px;
                height: 70px;
            }

            .name {
                padding-left: 10px;

                p {
                    &:first-child {
                        font-size: 18px;
                        font-weight: 500;
                    }

                    &:last-child {
                        margin-top: 10px;
                        color: var(--cp-primary);
                        font-size: 16px;
                    }
                }
            }
        }

        .van-row {
            margin: 0 -15px;
            padding-top: 15px;

            p {
                text-align: center;

                &:first-child {
                    font-size: 18px;
                    font-weight: 500;
                }

                &:last-child {
                    color: var(--cp-dark);
                    font-size: 12px;
                    padding-top: 4px;
                }
            }
        }
    }

    // 订单
    &-order {
        background-color: #fff;
        border-radius: 8px;
        margin-bottom: 15px;
        padding-bottom: 15px;

        .head {
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            padding: 0 15px;

            a {
                color: var(--cp-tip);
            }
        }

        .van-col {
            text-align: center;

            .MySvgIcon {
                font-size: 28px;
            }

            p {
                font-size: 12px;
                padding-top: 4px;
            }
        }
    }

    // 分组
    &-group {
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;

        h3 {
            padding-left: 16px;
            line-height: 44px;
        }

        .van-cell {
            align-items: center;
        }

        .MySvgIcon {
            font-size: 17px;
            margin-right: 10px;
        }
    }

    .logout {
        display: block;
        margin: 20px auto;
        width: 100px;
        text-align: center;
        color: var(--cp-price);
    }
}
</style>
