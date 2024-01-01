// 表单手机校验
const mobileRules = [
    { required: true, message: '请输入手机号' },
    { pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: '手机号格式不正确' },
]
// 表单密码校验
const passwordRules = [
    { required: true, message: '请输入密码' },
    { pattern: /^\w{8,24}$/, message: '密码需8-24个字符' },
]

export { mobileRules, passwordRules }