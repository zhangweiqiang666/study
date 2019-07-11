
//逻辑与  短路运算符
/*
 *有假才假 如果遇到假 立即跳出，如果没有遇该假  跳出最后一个数
 */

var a = 123
var b = undefined
var c = 'hello'
var d = ''
var e = 0

console.log(a && b)
console.log(b && c)
console.log(a && c)
console.log(b && d)
console.log(d && e)

console.log('-------------------------')

console.log(a || b)
console.log(b || c)
console.log(a || c)
console.log(b || d)
console.log(d || e)

/*
 * 逻辑非 ！ 将后面的变量或者值换成Boolean类型 然后在取反
 * !! 取反之后在取反 相当于没有取反，只做了Boolean类型的转换
 *!!'hello'  true
 * !!''      false
 * Boolean('') false
 */
console.log(!a)  //false
console.log(!!b) //false




