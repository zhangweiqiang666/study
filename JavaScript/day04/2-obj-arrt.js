var obj = {
    test: {
        a: 1
    },
    sayHi: function() {}
};
obj.test // {a:1}
obj.sayHi //function
obj.sayHi() //执行函数

console.log('---------------------------')

var obj1 = {
    name: 'djkshfkjsdf',
    age: 12
}
//1.通过 . 访问对 象的属性
console.log(obj1.name)
//2.通过[]访问对象的属性
console.log(obj1['name'])
//中括号中没有使用引号包裹的 当作变量处理
//	console.log(obj1[age1])


//	遍历对象
 for(var key in obj1){
	 console.log(key+'------'+ obj1[key])
	 }
