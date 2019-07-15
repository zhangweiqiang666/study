// 截取 截取一部分 不改变原数组 参数为一个从开始位置截取到末尾 
// 参数是两个 从开始位置开始 到结束位置  不包括结束位
var arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.slice(2))
console.log(arr.slice(2,7))

//splice 可以删除 插入 替换
//两个参数：splice(开始位置, 删除的项数)
//三个参数 splice(开始位置，删除的项数，插入替换的元素)
// 返回值 删除的元素组成的数组
// 改变原数组

// 删除
console.log(arr.splice(2,3));
console.log(arr)

// 插入
console.log(arr.splice(1,2,'hello','sss'));
console.log(arr)