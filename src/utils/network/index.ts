import axios, { AxiosError, type Method } from 'axios'
import { headerToken, rejectCode } from './token'

export const baseURL = 'https://consult-api.itheima.net/'
const instance = axios.create({
    // 基础地址，超时时间
    baseURL,
    timeout: 10000
})

// 请求头封装
instance.interceptors.request.use(
    headerToken.onFulfilled,
    headerToken.onRejected
)

// 响应状态码封装
instance.interceptors.response.use(
    rejectCode.onFulfilled,
    rejectCode.onRejected
)

type Data<T> = {
    code: number,
    message: string,
    data: T
}

// 导出一个通用的请求工具函数，支持设置响应数据类型
export const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
    // 在响应拦截器中返回了 res.data  也就是将来响应成功后的结果.所以要：request<数据类型，数据类型>() 这样才指定了 res.data 的类型
    return instance.request<T, Data<T>>({
        url,
        method,
        // 加上中括号实现动态判断，如果是get请求用params传递；否则用data传递
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}

export default instance