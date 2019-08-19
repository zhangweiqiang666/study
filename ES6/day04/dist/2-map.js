'use strict';

// 创建Map
var map = new Map();
console.log(map);
console.log(map.size);
map.set('name', 'zhangsan');
map.set('age', '12');
map.set('name', 'lisi');
map.set({}, 'lisi');
console.log(map);
// console.log(map.size);
// // 通过key值返回value值
// console.log(map.get('name'));
// console.log(map.delete('name'));
// console.log(map);
// console.log(map.clear());
// // 遍历
var keys = map.keys();
console.log(keys);
var values = map.values();
console.log(values);
var entries = map.entries();
console.log(entries);
map.forEach(function (value, key, map) {
    console.log(value, key, map);
});