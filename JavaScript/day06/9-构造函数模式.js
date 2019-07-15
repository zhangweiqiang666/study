//构造函数模式
//自定义构造函数 首字母大写
function Person(name, age, gender) {
   
        this.name = name;
        this.age = age;
        this.gender = gender;
   
}
var p1 = new Person('zhangsan',12,'男')
console.log(p1)
console.log(p1.constructor)

function Dog(name, age, color) {

    this.name = name;
    this.age = age;
    this.color = color;
}
var dog = new Dog('馒头',2,'yellow')
console.log(dog)
console.log(dog.constructor)