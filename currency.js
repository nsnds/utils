// 金额处理

const digitsRE = /(\d{3})(?=\d)/g

// 值 货币符号 保留位数
export function currency (value, currency, decimals) {
  if (Number.isNaN(parseFloat(value))) return value
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : ''
  decimals = decimals != null ? decimals : 2
  let stringified = Math.abs(value).toFixed(decimals)
  let _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  let i = _int.length % 3
  let head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  let _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  let sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

//标准四舍五入，可以传入负数、整数、数字字符串，num为转换的参数、place为保留的位数(大于0)
function keepTwoDecimalFull(num, place) {
  let result = parseFloat(num)
  if (isNaN(result)) {
    return 0;
  }
  if (result < 0) {
    let isNegative = true
    result = -result
  }
  result = Math.round(result * Math.pow(10, place)) / Math.pow(10, place)
  let result_str = result.toString()
  let iOf = result_str.indexOf('.')
  if (iOf < 0) {
    iOf = result_str.length;
    result_str += '.'
  }
  while (result_str.length <= iOf + place) {
      result_str += '0'
  }
  return isNegative ? '-' + result_str : result_str
}