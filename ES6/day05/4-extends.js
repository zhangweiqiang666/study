//父类
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
        //this 如果是在子类构造器中调用父类构造器 父类构造器中的this是子类的实例对象
    }
    sayName() {
        console.log('Animal中的实例方法', this.name)
    }
    static animalSay() {
        console.log('Animal中的静态方法')
    }
}
Animal.animalAttr = 'Animal中的静态属性'

class Dog extends Animal {
    constructor(name, age, color) {
        //在子类构造器中调用父类构造器 在super底下用this
        super(name, age)
        this.color = color;
    }
}

let dog = new Dog('大白', 1, '黑笔')
console.log(dog)
// 原型继承
dog.sayName()
//类继承
Dog.animalSay();
console.log(Dog.animalAttr)
//静态属性和方法的继承
console.log(Dog.__proto__ === Animal); //true
//实例属性和方法的继承
//子类的原型对象继承自父类的原型对象
console.log(Dog.prototype.__proto__ === Animal.prototype);

