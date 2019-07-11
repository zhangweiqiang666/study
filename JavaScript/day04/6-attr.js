//每一个构造函数都有一个原型对象
//实例可以调用对应的构造函数中的原型对象的属性和方法

console.log(Object.prototype)
console.log(Object.prototype.constructor) //Object

var obj= {
	name: 'zhangsan',
	toString:function(){}
	}

	console.log(obj.toString()) //[object Object]
	console.log(obj.toString === Object.prototype.toString)
console.log('----------------------')
//通过实例找构造函数
console.log(obj.constructor)

console.log('name' in obj)
console.log('toString' in obj)
console.log('aaa' in obj)

//hasOwnProperty() 判断自有属性
console.log(obj.hasOwnProperty('name'))
console.log(obj.hasOwnProperty('toString'))
console.log(obj.propertyIsEnumerable('name'))
console.log(obj.propertyIsEnumerable('toString'))     
for(var key in obj){
	console.log(key)
	}

console.log(Object.prototype.isPrototypeOf(obj))
