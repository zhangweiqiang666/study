
var arr = [1, 'lisi', 2, 'zhangsan', 3, 'hello', 1, 'world', 1]
//给index为10的位置设置为23 空余部分补undefined
arr[10] = 23;
arr.length = 100;
console.log(arr)
console.log(arr.length) //11
arr.length= 2
console.log(arr)
arr.length=5;
console.log(arr)