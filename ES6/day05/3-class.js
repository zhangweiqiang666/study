//Animal类
class Animal {
    // 构造器
    constructor(name, age) {
        //this -->  新构造出来的实例
        this.name = name;
        this.age = age;
    }
    //实例方法
    sayName() {
        console.log('sayName', this.name);
    }
    // 静态方法
    static say() {
        console.log('静态方法');
    }
}
//静态属性
Animal.staticAttr = '静态属性';
let animal = new Animal('大白', 1);
console.log(animal)
console.log(animal.name);
console.log(animal.age);
animal.sayName()
Animal.say()
console.log(Animal.staticAttr)

