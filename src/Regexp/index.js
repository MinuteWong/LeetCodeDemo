const regexp = /happ(?=y)/g

const httpParams = /(\?|\&)([^=]+)\=([^&]+)/g
const key = /(?<=[&\?]key=)[^&]+/g
const keys = /\{([^\}])+\}/g
const isPhone = /^\d{11}$/
const isNumber = /^\d+$/
console.log('http://www.baidu.com?a=b&key=d'.match(key))
const regexp2 = /(a)b\1/g
'http://www.baidu.com?a=b&c=d'.replace(httpParams, function(...args){
  console.log(args)
})

console.log('http://www.baidu.com/fetch/{a}/b'.match(keys), RegExp.$1)


