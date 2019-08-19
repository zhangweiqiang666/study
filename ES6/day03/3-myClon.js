let obj = {};
let obj1 = { name: 'zhangsan', age: 12,friends:[12,34,56]}
let obj2 = { name: 'lisi', age: 15, sayName() {} }
let obj3 = { color: 'red', weight: '100' }
function myClone(target, ...tail) {
    tail.forEach(function(item) {
        for(let key in item){
            if(Array.isArray(item[key])){
                target[key] = JSON.parse(JSON.stringify(item[key]))
            }else
            target[key] = item[key];
        }
    })
    return target;
}
myClone(obj, obj1, obj2)
console.log(obj)