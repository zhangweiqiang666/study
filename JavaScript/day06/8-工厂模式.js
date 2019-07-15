//工厂模式创建对象
var obj = {
    name: 'zhangsan',
    age: 12,
    gender: '男'
}
var obj2 = {
    name: 'lisi',
    age: 15,
    gender: '女'
}

function createObject(name, age, gender) {
    var obj = {
        name: name,
        age: age,
        gender: gender,
        sayName:function(){
            console.log(this.name)
        }
    }
    return obj
}
var obj1 = createObject('zhangsan', 12, '男')
var obj2 = createObject('lisi', 15, '女')
obj1.sayName()
console.log(obj1,obj2)
console.log(obj1.constructor)