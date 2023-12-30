import { useUserStore } from '@/stores/index'
import { showToast } from 'vant'
import router from '@/router'

// 请求头添加
export const headerToken = {
    onFulfilled: (res: any) => {
        const store = useUserStore();
        if (store.user?.token && res.headers) {
            res.headers['Authorization'] = `Bearer ${store.user?.token}`
        }
        return res
    },
    onRejected: (err: any) => Promise.reject(err),
}

// 响应状态处理
export const rejectCode = {
    onFulfilled: (res: any) => {
        // 后台约定，响应成功，但是code不是10000，是业务逻辑失败
        if (res.data?.code !== 10000) {
            showToast(res.data?.message || '业务失败')
            return Promise.reject(res.data)
        }
        // 业务逻辑成功，返回响应数据，作为axios成功的结果
        return res.data
    },
    onRejected: (err: any) => {
        if (err.response.status === 401) {
            // 删除用户信息
            const store = useUserStore()
            store.delUser()
            // 跳转登录，带上接口失效所在页面的地址，登录完成后回跳使用
            router.push({
                path: '/login',
                query: { returnUrl: router.currentRoute.value.fullPath }
            })
        }
        return Promise.reject(err)
    },
}