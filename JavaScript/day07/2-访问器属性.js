//访问器属性 没有值 有get 和 set 方法
var obj = {
    name: 'zhangsan',
    age: 13,
    _weight: 100
}
// Object.defineProperty(obj, 'weight', { //获取值
//     get: function () {
//         return this._weight - 5
//     },
//     set: function (param) { //设置值
//         this._weight = param
//     },
//     enumerable:true

// })
// Object.defineProperty(obj, '_weight', {
//     enumerable: false,
// })
Object.defineProperties(obj, {
    weight: {
        get: function () {
            return this._weight - 5
        },
        set: function (param) { //设置值
            this._weight = param
        },
        enumerable: true,
    },
    _weight: {
        enumerable: false
    }
})

obj.weight = 150
console.log(obj.weight) //145
console.log(obj._weight) //150
console.log(Object.getOwnPropertyDescriptor(obj, 'weight'))
console.log(Object.getOwnPropertyDescriptor(obj, '_weight'))
console.log(obj)