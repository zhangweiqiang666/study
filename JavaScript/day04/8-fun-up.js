// 函数声明提升
// 函数声明提升和变量声明提升


function test() {
	console.log(1);
}
test()
// var one
// function one() {}
// console.log(one)

// function one() {}
// var one
// console.log(one)

//console.log(one) // fun 

// console.log(test())

// function test() {
//  console.log('test')
//  return 111
// }
// var test

// console.log(one())

// function one() {
// 	console.log('one')
// 	return 0
// }


// num() //报错
// console.log(num) //undefined
// var num = function () {
// 	console.log(1);
// }
// num(); //1
// console.log(num) //函数本身

// console.log(a) //?
// a(); //?
// var a;

// function a() {
// 	console.log(10);
// }
// console.log(a); //?
// a = 6;
// a(); //?


// (function test() {
// 	console.log(name);
// 	var name = 'zhangsan';
// 	console.log(name);
// })()

// var test
// test()
// console.log(test)
// test = function () {
// 	console.log(1)
// }

// console.log(test)

// function test() {
// 	console.log(1)
// }
// var test

console.log(a)
function a() {
	console.log(10)
}
var a
a();
console.log(a)
a = 6;
a();