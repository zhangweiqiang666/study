function test() {
    console.log(this); //Object[global] window
}
test();

// module.exports{} 默认为空对象
console.log(this);//module.exports
console.log(this === module.exports);  //true

// 箭头函数
let test2 = () => {
    //箭头函数内部没有自己的this, this指向箭头函数申明时的父作用域中的this
    console.log(this);
}
let obj = {
    test,
    test2
}
obj.test() // obj
obj.test2() // {}

//箭头函数内部的argument不保存实参
let tset3 = () => {
console.log(arguments);
}
tset3(12,34,56)