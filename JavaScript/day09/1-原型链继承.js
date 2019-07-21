//子构造函数的原型对象是父构造函数的实例
function Animal(name, age) {
    this.name = name;
    this.age = age;
}
Animal.prototype.sayName = function () {
    console.log(this.name)
}
var animal = new Animal('大白', 3)
animal.sayName()
console.log(animal)

function Dog(name, age, color) {
    // this.name = name
    // this.age = age
    //经典继承
    Animal.call(this, name, age)
    this.color = color
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog
var dog = new Dog('沙雕', 2, 'yellow')
dog.sayName()
console.log(dog)

//Array
console.log(Array.prototype.__proto__.constructor)

var m = 'abcabc'.match(/(.)b(.)/);
console.log(m) // ['abc', 'a', 'c']