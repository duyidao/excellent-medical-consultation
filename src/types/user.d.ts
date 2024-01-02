// 用户信息
export type User = {
    /** token令牌 */
    token: string
    /** 用户ID */
    id: string
    /** 用户名称 */
    account: string
    /** 手机号 */
    mobile: string
    /** 头像 */
    avatar: string
}

// 短信验证码类型，登录|注册|修改手机号|忘记密码|绑定手机号
export type CodeType = 'login' | 'register' | 'changeMobile' | 'forgetPassword' | 'bindMobile'

export type Code = {
    code: string
}
