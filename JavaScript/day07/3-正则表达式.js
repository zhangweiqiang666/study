//创建正则表达式
var pattern = new RegExp('abc','img')

console.log(pattern)

// 2.字面量
var pattern = /hello/gi
console.log(pattern)
// 正则表达式对象的属性
console.log(pattern.global)
console.log(pattern.ignoreCase)
console.log(pattern.multiline)
console.log(pattern.source)
console.log(pattern.lastIndex) //下一次检索的位置 有g修饰 会维护lastIndex 没有g修饰 lastIndex永远是0