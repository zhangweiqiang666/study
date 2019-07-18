var num = 12.3;
//向上取整 ceil
console.log(Math.ceil(num))
// 向下取整 floor
console.log(Math.floor(num))
//四舍五入 round
console.log(Math.round(13.6))
console.log(Math.round(13.2))
//随机数
console.log(Math.random()) //[0,1)

var arr = ['李白', '杜甫', '王维', '宙斯', '普罗米修斯', '阿波罗', '夸父', '嫦娥']
var index = Math.floor(Math.random() * arr.length)
console.log(arr[index])

console.log(Math.min(12,35,4,6,4,3))
//ES6解构
console.log(Math.max(...[12, 35, 4, 6, 4, 3]))