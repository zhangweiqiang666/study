// 声明数组
// 1.构造函数
var arr = new Array();
console.log(arr);
var arr = new Array(20);
console.log(arr[3]) //undefined
var arr = new Array('zhangsan', 'lisi')
console.log(arr)
console.log(arr.length) //2
console.log(arr[100]) //undefined

//2.数组字面量
var arr = ['zhangsan','lisi']
console.log(arr)