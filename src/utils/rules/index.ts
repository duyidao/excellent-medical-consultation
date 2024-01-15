/**
 * 登录表单校验
*/
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
// 表单验证码校验
const codeRules = [
    { required: true, message: '请输入验证码码' },
    { pattern: /^\w{6}$/, message: '密码需6个字符' },
]

/**
 * 添加患者表单校验
*/
const nameRules = [
    { required: true, mmessage: '请输入患者姓名' },
    { pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/, message: '中文2-16个字符' },
]

const idCardRules = [
    { required: true, mmessage: '请输入患者身份证' },
    { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式不对' },
]
export { mobileRules, passwordRules, codeRules, nameRules, idCardRules }
