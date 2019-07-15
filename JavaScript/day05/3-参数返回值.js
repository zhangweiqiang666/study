function test(a,b){
    return 1
}
console.log(test.length); //形参的个数
test()
//打印test()运行之后的返回值 
console.log(test()) 

//函数作为参数
function handle(fun){
    var msg = 'hello'
    fun(msg);
}
handle(function(m){
    console.log(m)
})

// 函数作为返回值
function handle2(){
    return function(){
        console.log(123)
        return 1
    }
}
handle2()()
console.log(handle2()())

