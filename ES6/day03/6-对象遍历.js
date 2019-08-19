let obj = {
    name:'zhangsan',
    age:12,
    gender:'男'
}
let keys =Object.keys(obj)
console.log(keys); //属性名
let values = Object.values(obj)
console.log(values); //属性值
let entries = Object.entries(obj)
console.log(entries); //键值对


for(let [key,value] of Object.entries(obj)){
    console.log(key,value);
}

function test () {
    for(let item of arguments){
        console.log(item);
        
    }
  }
  test(121,23.1,651.6)

