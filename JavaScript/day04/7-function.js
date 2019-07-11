//声明函数
function test() {
    //函数体
    console.log('test')
    return 1;

    console.log('after')
}

test();

// 函数表达式声明 匿名函数
var test1 = function() {
    console.log(123)
}
test1();

//匿名函数的使用  IIFE
(function () {
	    console.log(21431234)
})();
