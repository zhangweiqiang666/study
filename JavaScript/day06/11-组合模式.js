// 每个实例自有的放到构造函数中 实例共享的放到原型对象中
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.friends = []; 
   
}
// Person.prototype.sayName = function(){
//     console.log(this.name)
// }
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name)
    }
}
var p1 = new Person('zhangsan', 12, '男');
var p2 = new Person('lisi',11,'女');
 p1.friends.push('wwe')
p1.sayName()
console.log(p1)
console.log(p1.constructor)