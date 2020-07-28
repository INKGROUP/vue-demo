/**
 * [sensitiveName 姓名脱敏]
 * @return void
 */
export function sensitiveName (name) {
  if (!name) {
    return ''
  }

  if (name.length > 2) {
    let arr = new Array(name.length - 1)
    return name[0] + arr.join('*') + name[name.length - 1]
  } else {
    return name[0] + '*'
  }
}
/**
 * [sensitiveHandel 脱敏处理]
 * @param  {[String]} val      [需要处理的值]
 * @param  {[Number]} startNum [前几位不脱敏的值]
 * @param  {[Number]} endNum   [后几位不脱敏的值]
 * @return {[String]}          [处理以后的值]
 */
export function sensitiveHandel (val, startNum, endNum) {
  if (!val) {
    return ''
  }

  return val.replace(new RegExp(`(\\d{${startNum}})(\\d+)(\\d{${endNum}}|\\d{${endNum - 1}}X)`), ($0, $1, $2, $3) => {
    for (let i = 0, len = $2.length; i < len; i++) {
      $1 += '*'
    }
    return $1 + $3
  })
}

/**
 * [bankNumberUI 银行卡号中间几位加*处理]
 * @param  {[String]} val [需要处理的银行卡号]
 * @return {[String]}     [处理好的银行卡号]
 */
export function bankNumberUI (val) {
  return val ? `${val.slice(0, 4)} **** **** ${val.slice(-4)}` : ''
}

/**
 * [phoneFilter 手机号中间几位加*处理]
 * @param  {[String]} val [需要处理的手机号]
 * @return {[String]}     [处理好的手机号]
 */
export function phoneFilter (val) {
  let value = val.toString()
  return value ? `${value.slice(0, 3)} **** ${value.slice(-4)}` : ''
}

/**
 * [idCardSpace 身份证号带空格]
 * @param  {[String]} val [需要处理的身份证号]
 * @return {[String]}     [处理好的身份证号]
 */
export function idCardSpace (val) {
  if (typeof val !== 'string') return ''
  let reg = val.match(/^(\d{6})(\d{8})([\d|X|x]{4})$/)
  return reg ? `${reg[1]} ${reg[2]} ${reg[3]}` : ''
}

/**
 * [bankNumSpace 银行卡号带空格]
 * @param  {[String]} val [需要处理的银行卡号]
 * @return {[String]}     [处理好的银行卡号]
 */
export function bankNumSpace (val) {
  return val ? val.replace(/(.{4})/g, '$1 ') : ''
}

/**
 * [telNumSpace 手机号带空格]
 * @param  {[String]} val [需要处理的手机号]
 * @return {[String]}     [处理好的手机号]
 */
export function telNumSpace (val) {
  if (typeof val !== 'string') return ''
  let reg = val.match(/^(\d{3})(\d{4})(\d{4})$/)
  return reg ? `${reg[1]} ${reg[2]} ${reg[3]}` : ''
}
