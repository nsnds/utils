// 大小写字母
export function validateAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

// 大小写字母与数字
export function validateNumberAlphabets (str) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(str)
}

// 邮箱
export function validateEmail (str) {
  const reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g // eslint-disable-line
  return reg.test(str)
}

// 校验手机号码：必须以数字开头，除数字外，可含有 -
export function validateMobil (str) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/
  return reg.test(str)
}

// 6-20位非空字符
export function validatePassword (str) {
  const reg = /^\S{6,20}$/
  return reg.test(str)
}

// 6位数字
export function validatePayPassword (str) {
  const reg = /^\d{6}$/
  return reg.test(str)
}

// 银行卡号: 16或19位数字
export function validateBankNo (str) {
  const reg = /^\d{16}|\d{19}$/
  return reg.test(str)
}

// 数字&浮点数(金额)
export function validateAmount (str) {
  const reg = /^\d+(\.\d+)?$/
  return reg.test(str)
}

// 数字、至少一位
export function validateCode (str) {
  const reg = /^\d{1,}$/
  return reg.test(str)
}

// 正整数校验
export function validatePositiveInt (str) {
  const reg = /^\+?[1-9]\d*$/
  return reg.test(str)
}
