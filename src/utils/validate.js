/**
 * @param {*} x
 * @desc 判断是不是手机号
 */
export function isPhone(str = '') {
  return /^(?:\+?86)?1(?:3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(str)
}

/**
 * @param {*} x
 * @desc 脱敏手机号
 */
export function maskPhoneNumber(phoneNumber = '') {
  return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * @param {*} x
 * @desc 判断是否为身份证号
 */
export function isIdCard(str = '') {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  )
}

/**
 * @desc  验证车架号
 * @param  {String|Number} vin
 */
export function isVIN(vin = '') {
  return /^[A-HJ-NPR-Z\d]{17}$/.test(vin)
}

/**
 * @desc  验证车牌号
 * @param  {String} plate 车牌号
 * @returns {Boolean}
 */
export function isLicensePlate(plate = '') {
  // 油车：1汉字 + 1字母 + 5位字母/数字/特殊字符
  // 电车：1汉字 + 1字母 + 6位字母/数字/特殊字符
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9挂学警港澳]{5,6}$/.test(
    plate
  )
}
