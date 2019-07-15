//对象属性的特性
var obj = {
    name:'zhangsan',
    age:12
}
console.log(obj) //键值对 key-value

console.log(Object.getOwnPropertyDescriptor(obj,'name'))
/*{
    value: 'zhangsan',
    writable: true, //k可以修改
    enumerable: true, //可以枚举
    configurable: true //可以重新定义
}
*/
//修改属性的描述信息 修改 属性的默认特性
Object.defineProperty(obj,'name',{
    // enumerable:false,
    writable:false
})
obj.name = 'lisi'
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(obj)