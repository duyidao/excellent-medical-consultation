import axios from 'axios'
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

instance.interceptors.response.use(
    rejectCode.onFulfilled,
    rejectCode.onRejected
)

export default instance