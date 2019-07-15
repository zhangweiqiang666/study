// 闭包 函数访问上下文中的变量
var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = (function (num) {

        return function () {
            console.log(num);
        }
    })(i)
}
arr[0]()
arr[1]()
arr[2]()
arr[3]()
arr[4]()