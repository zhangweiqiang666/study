// 弊端 属性共享

function Person() {}
Person.prototype.name = 'zhangsan';
Person.prototype.friends = []
Person.prototype.sayName = function(){
    console.log(this.name)
}

var p1 = new Person();
console.log(p1.name)
var p2 = new Person();
console.log(p2.name)
p1.friends.push('rrrrr')
console.log(p1.friends)
 console.log(p2.friends)