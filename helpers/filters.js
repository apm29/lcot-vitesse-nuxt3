import dayjs from 'dayjs'

export const filterHtml = (html, length = 150) => {
  const re = /<.+?>/g // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
  html = html.replace(re, '') // 执行替换成空字符
  html = html.replace(/&nbsp;/ig, ' ')// 替换HTML空格
  length = parseInt(length)
  if (length && length > 0)
    html = html.substring(0, length)

  return html
}

export const filterTime = (time) => {
  return dayjs(time).format('YYYY/MM/DD')
}
