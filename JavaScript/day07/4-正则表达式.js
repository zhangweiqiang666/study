// 进行字符串的匹配
var str = 'helloworld HELLO';
//找hello字符串 如果有返回true 如果没有 返回false
var pattern = /hello/ig
console.log(pattern.lastIndex)
console.log(pattern.test(str))
console.log(pattern.lastIndex)//5
console.log(pattern.exec(str))