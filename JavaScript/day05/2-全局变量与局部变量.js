//函数内部声明的变量是局部变量
//在函数外声明的变量是全局变量
// 在函数内部是可以访问全局变量 在函数外部不可以访问局部变量
var a = 1
function test() {
    console.log(a) //1
     b = 2
    console.log(b) //2
}
test()
console.log(a) //1
console.log(b) //error

var g =100
function testG(){
    console.log(g)
    var g = 200
    console.log(g)
}
testG()
console.log(g)