<script setup lang="ts">
import MyNavBar from '@/components/MyNavBar.vue';
import { mobileRules, passwordRules } from '@/utils/rules'
import { showToast, showSuccessToast } from 'vant';
import { ref } from 'vue';
import { login } from '@/services/user'
import { useUserStore } from '@/stores/index'
import { useRouter, useRoute } from 'vue-router'

const store = useUserStore()
const router = useRouter()
const route = useRoute()

const data = ref<{ mobile: string, password: string }>({
    mobile: '13230000001',
    password: 'abc12345',
})
const check = ref<boolean>(false)

// 登录操作
const submitFn = async () => {
    if (!check.value) return showToast('请先勾选用户协议')
    const res = await login(data.value)
    store.setUser(res.data) // 保存数据
    router.replace((route.query.returnUrl as string) || '/') // 返回来的路由或直接去往首页
    showSuccessToast('登录成功')
}
</script>

<template>
    <div class="login-page">
        <MyNavBar right-text="注册"
            @click-right="$router.push('/register')"></MyNavBar>
        <!-- 头部 -->
        <div class="login-head">
            <h3>密码登录</h3>
            <a href="javascript:;">
                <span>短信验证码登录</span>
                <van-icon name="arrow"></van-icon>
            </a>
        </div>
        <!-- 表单 -->
        <van-form autocomplete="off"
            @submit="submitFn">
            <van-field placeholder="请输入手机号"
                required
                v-model="data.mobile"
                type="tel"
                :rules="mobileRules" />
            <van-field placeholder="请输入密码"
                required
                type="password"
                v-model="data.password"
                :rules="passwordRules" />
            <div class="cp-cell">
                <van-checkbox v-model="check">
                    <span>我已同意</span>
                    <a href="javascript:;">用户协议</a>
                    <span>及</span>
                    <a href="javascript:;">隐私条款</a>
                </van-checkbox>
            </div>
            <div class="cp-cell">
                <van-button block
                    round
                    type="primary"
                    native-type="submit">
                    登 录
                </van-button>
            </div>
            <div class="cp-cell">
                <a href="javascript:;">忘记密码？</a>
            </div>
        </van-form>
        <!-- 底部 -->
        <div class="login-other">
            <van-divider>第三方登录</van-divider>
            <div class="icon">
                <img src="@/assets/qq.svg"
                    alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login {
    &-page {
        padding-top: 46px;
    }

    &-head {
        display: flex;
        padding: 30px 30px 50px;
        justify-content: space-between;
        align-items: flex-end;
        line-height: 1;

        h3 {
            font-weight: normal;
            font-size: 24px;
        }

        a {
            font-size: 15px;
        }
    }

    &-other {
        margin-top: 60px;
        padding: 0 30px;

        .icon {
            display: flex;
            justify-content: center;

            img {
                width: 36px;
                height: 36px;
                padding: 4px;
            }
        }
    }
}

.van-form {
    padding: 0 14px;

    .cp-cell {
        height: 52px;
        line-height: 24px;
        padding: 14px 16px;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .van-checkbox {
            a {
                color: var(--cp-primary);
                padding: 0 5px;
            }
        }
    }

    .btn-send {
        color: var(--cp-primary);

        &.active {
            color: rgba(22, 194, 163, 0.5);
        }
    }
}
</style>

