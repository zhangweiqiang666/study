// concat slice splice
//拼接    截取   删除 替换 插入
var arr = [4, 6, 4, 3, 1]
var arr2 = [1, 2, 3, 4, 5, 6]
// arr.push(arr2)
// console.log(arr) //[ 4, 6, 4, 3, 1, [ 1, 2, 3, 4, 5, 6 ] ]

// concat
console.log(arr.concat(arr2))

console.log(arr.concat('hello'))

Array.prototype.myConcat = function (a) {
    var arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i])
    }
    if (Array.isArray(a)) {
        for (let i = 0; i < a.length; i++) {
            arr[arr.length] = a[i]
        }
    }else{
        arr.push(a)
    }
    return arr
}
console.log(arr.myConcat(arr2))
console.log(arr.myConcat('hello'))
console.log(arr)