function getToday() {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var day = now.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  // 如果需要时分秒
  var h = now.getHours()
  var m = now.getMinutes()
  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }
  var formatDate = year + '-' + month + '-' + day + ' ' + h + ':' + m
  return formatDate
}
// 把函数添加到对象属性里
module.exports = {
  getToday: getToday
}
