// 函数声明提升
// 函数声明提升和变量声明提升
test()

function test() {
    console.log(1);
}

var one
function one() {}
console.log(one)

function one() {}
var one
console.log(one)

console.log(one) // fun 
function one(){
	console.log('one')
	}
	one();
var one = 123;
console.log(one)
