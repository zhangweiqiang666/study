// Boolean Number String
//Boolean
//Number
//String

var n = new Number(123) //Number 123
console.log(n) //Number的实例
console.log(typeof n)
console.log(n instanceof Object)
console.log(n instanceof Number)
var m = 123;
console.log(m) //基本数据类型
console.log(typeof m)
console.log(m instanceof Number)
console.log(m instanceof Object)
//将基本的数据类型转换成包装器类型
var o = new Object(123)
console.log(o)
console.log(o instanceof Object)
console.log(o instanceof Number)