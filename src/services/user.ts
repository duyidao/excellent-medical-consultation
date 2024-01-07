import { request } from './../utils/network/index';
import type { User, CodeType, Code, UserInfo } from '@/types/user.d.ts';

// 账号密码登录
export const login = (payload: {mobile: string, password: string}) => {
    return request<User>('/login/password', 'post', payload)
}

// 验证码获取。type判断验证码使用场景类型：login登录register注册changeMobile更换手机号forgetPassword找回密码,bindMobile绑定三方登录
export const getCode = (payload: {mobile: string, type: CodeType}) => {
    return request<Code>('/code', 'get', payload)
}

// 验证码登录
export const codeLogin = (payload: {mobile: string, code: string}) => {
    return request<User>('/login', 'post', payload)
}

// 获取个人信息
export const getUserInfo = () => request<UserInfo>('/patient/myUser')