// Set集合
let set = new Set();
console.log(set)
console.log(set.size);
set.add(1)
set.add(1)
set.add('hello')
console.log(set.size);
console.log(set);
let keys  = set.keys()
console.log(keys);
let values = set.values()
console.log(values);
let entries = set.entries()
console.log(entries);
while(1){//遍历 迭代器对象
    let res = values.next()
    if (res.done) 
        break;
        console.log(res.value)
    
}
set.forEach(function (value,key,set) {
    console.log(value,key,set);
    
  })



