// Object.assign()  对象的浅复制 对象的合并
let obj={
    name:'zhangsan',
    friends:[111,1,1,2,3,1,3]
};

let obj2 = Object.assign(obj);
console.log(obj === obj2)

//对象的合并 可以实现深复制
let obj3= {
    age:12
}
let obj4 = Object.assign({},obj)
console.log(obj.friends === obj4.friends) //true

let obj5={}
Object.assign(obj5,obj,obj2)
console.log(obj5)