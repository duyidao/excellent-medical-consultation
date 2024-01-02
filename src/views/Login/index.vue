<script setup lang="ts">
import MyNavBar from '@/components/MyNavBar.vue';
import { mobileRules, passwordRules, codeRules } from '@/utils/rules'
import { showToast, showSuccessToast, type FormInstance } from 'vant';
import { ref, onUnmounted } from 'vue';
import { login, getCode, codeLogin } from '@/services/user'
import { useUserStore } from '@/stores/index'
import { useRouter, useRoute } from 'vue-router'

const store = useUserStore()
const router = useRouter()
const route = useRoute()

const mobile = ref<string>('13230000001') // 是否勾选用户协议
const password = ref<string>('abc12345') // 是否勾选用户协议
const code = ref<string>('') // 是否勾选用户协议
const check = ref<boolean>(false) // 是否勾选用户协议
const isPass = ref<boolean>(true) // 是否是密码登录，true为密码登录；false为验证码登录

const form = ref<FormInstance>() // FormInstance 是组件实例的类型

const codeText = ref<string>('发送验证码');
const codeTime = ref<number>(0);
let timer: any = null
// 点击获取验证码按钮
const getCodeFn = async () => {
    if (codeTime.value > 0) return showToast(`等待${codeTime.value}秒后再试`)
    await form.value?.validate('mobile') // 验证表单，支持传入一个或多个 name 来验证单个或部分表单项，不传入 name 时，会验证所有表单项
    codeTime.value = 60
    timer = window.setInterval(() => {
        codeTime.value -= 1
        codeText.value = `${codeTime.value}秒后重试`
        if (codeTime.value === 0) {
            codeText.value = `重新发送验证码`
            window.clearInterval(timer)
        }
    }, 1000);
    const res = await getCode({
        mobile: mobile.value,
        type: 'login'
    })
    showSuccessToast('发送成功')
    code.value = res.data.code
}

// 组件卸载，移除定时器
onUnmounted(() => window.clearInterval(timer))

// 登录操作
const submitFn = async () => {
    if (!check.value) return showToast('请先勾选用户协议')
    let res = null
    // 状态不同调用不同的方法登录
    if (isPass.value) res = await login({ mobile: mobile.value, password: password.value })
    else res = await codeLogin({ mobile: mobile.value, code: code.value })
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
            <h3>{{ isPass ? '密码登录' : '短信验证码登录' }}</h3>
            <a href="javascript:;"
                @click="isPass = !isPass">
                <span>{{ !isPass ? '密码登录' : '短信验证码登录' }}</span>
                <van-icon name="arrow"></van-icon>
            </a>
        </div>
        <!-- 表单 -->
        <van-form ref="form"
            autocomplete="off"
            @submit="submitFn">
            <van-field placeholder="请输入手机号"
                required
                v-model="mobile"
                type="tel"
                name="mobile"
                :rules="mobileRules" />
            <van-field placeholder="请输入密码"
                required
                v-if="isPass"
                type="password"
                name="password"
                v-model="password"
                :rules="passwordRules" />
            <van-field v-else
                placeholder="短信验证码"
                name="code"
                v-model="code"
                :rules="codeRules">
                <template #button>
                    <span class="btn-send"
                        :class="{ active: codeTime > 0 }"
                        @click.stop="getCodeFn">{{ codeText }}</span>
                </template>
            </van-field>
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

