//this指向当前函数的作用域
function test() {
    console.log(this)
}
test();

console.log('-----------------------------------')
var obj = {
    name: 'zhangsan',
    age: 21,
    sayName: function() {
        console.log(this); //obj	
    }
}
