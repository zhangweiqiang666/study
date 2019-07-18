//String属性和方法
//length 字符个数
//插入At(index) 获取index位置上的字符
//chatCodeAt(index) 获取index位置上的字符的ASCII码值
var str = 'a bc   de  fg'
str.split('').forEach(function (item, index) {
    console.log(item, '-------', str.charCodeAt(index))
})

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i), '------', str.charCodeAt(i))
}
console.log(str.replace(/ /g, ''))
console.log('hello'.toUpperCase())
console.log('HeLLo'.toLowerCase())