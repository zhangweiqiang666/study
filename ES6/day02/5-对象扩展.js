let name = 'zhangsan',
    age = 12,
    gender = '男';
let obj = {
    name,
    age,
    gender,
    sayName() {
        console.log(this.name)
        return this.name
    },
    sayHi: () => {
        console.log('Hi')
        return "hi";
    }
};
console.log(obj.sayHi());


//属性名可以用表达式
// 给对象中添加10个属性 以name为前缀，以index为后缀
let obj2 = {

}
for (let i = 0; i < 10; i++) {
    obj2['name' + i] = i;
}
console.log(obj2)

// 变量作为属性名
let obj3 = {
    [name] : 'hello'
}
console.log(obj3)

console.log(obj.sayName.name)