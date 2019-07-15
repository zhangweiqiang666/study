 var stus = [{
         name: 'zhangsan',
         age: 12
     },
     {
         name: 'lisi',
         age: 18
     },
     {
         name: 'wangwu',
         age: 12
     }
 ]

 var res = !(stus.some(function (item, index, arr) {
     return item.age < 18
 }))
 console.log(res);

 //filter
 //过滤
 var res = stus.filter(function (item, idnex, arr) {
     //  return item.age >= 18
     return item.age < 18
 })
 console.log(res);

 //map
 //映射
 var res = stus.map(function (item, index, arr) {
     return item.age * 2
 })
 console.log(res)

 //查找所有未成年人的名字
 var res = stus.filter(function (item, idnex, arr) {
     //  return item.age >= 18
     return item.age < 18
 }).map(function (item, index, arr) {
     return item.name
 })
 console.log(res)