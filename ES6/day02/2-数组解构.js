// let [a,b,c] = [4,5151,51,15,15,15,5,54,5,5,54]
// console.log(a,b,c)
// 使用...扩展运算符保存剩余的值
let arr = [4, 5151, 51, 15, 15, 15, 5, 54, 5, 5, 54]
let [a, b, c, ...d] = arr
console.log(a, b, c, d)
// 扩展运算符可以将数据展开
let result = Math.max(2, 8545, 2, 5, 1641, 6)
console.log(result)
result = Math.max(...arr)
console.log(result)

function test(...a) { //rest参数
    console.log(a)
}

test(1, 23, 25, 84, 48, 8, 2)

function test() {
    console.log('tset')
    return 2;
}
// 先判断是否有值，如果有 则赋值 没有再找默认值
let [g = test] = [1]
console.log(g)
let [f = test()] = []
console.log(f)