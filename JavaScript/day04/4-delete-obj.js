var obj = {
    id: 1001,
    name: 'zhangshan',
    age: 12,
    gender: '男',
    address: '',
    info: '',
    hibby: null
}

console.log(obj)
//删除对象中的属性
delete obj.address;
console.log(obj);

for (var key in obj) {
    if (!obj[key]) {
        delete obj[key]
    }
}
console.log(obj)
