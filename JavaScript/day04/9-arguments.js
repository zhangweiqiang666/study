//arguments里存放实参列表， 类数组对象，length属性代表存放实参的个数，callee属性代表函数

//累加
function add() {
    console.log(arguments);
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        sum += arguments[i]
    }
    return sum;
}
var res = add(1, 2, 1, 1, 2, 23, 44, 3, 4, 34, 5, 4)
console.log(res)

//递归阶乘
function mul(num) {

    console.log(arguments.callee);
		if(num>1){
   return num*arguments.callee(num-1)
	 }else{
		 return 1
		 }
}

var res= mul(6);
console.log(res)

