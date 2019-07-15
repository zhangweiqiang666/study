// 进行字符串的匹配
var str = 'helloworld HELLO';
//找hello字符串 如果有返回true 如果没有 返回false
var pattern = /hello/ig
// console.log(pattern.lastIndex)
// console.log(pattern.test(str)) //false
// console.log(pattern.lastIndex) //0
// console.log(pattern.exec(str))

//将匹配到的所有的字符串放到一个数组中
var arr = []
while (res = pattern.exec(str)) {
    arr = arr.concat(res)
}
console.log(arr)

//String类型提供的正则表达式
console.log(str.match(pattern))
console.log(str.search(pattern))
console.log(str.replace(pattern, 'js'))
str = '1&1&47&15&4'
console.log(str.split('&')) 
console.log(str.split(''))

console.log(+new Array(017));