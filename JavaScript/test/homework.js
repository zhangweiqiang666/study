//1
var arr = [1, 2, 3, 4]
var sum = 0
arr.forEach(function (item, index, arr) {
    sum += item
})
console.log(sum)

//2
arr = [1, 21, 56, 4, 8, 56, 46, 46]
var res = arr.filter(function (item, index, arr) {
    return item != 46
})
console.log(res)

//3
 arr = arr.filter(function (item, index, arr) {
    return item != 46
})
console.log(arr)

//4
arr1 = [1, 2, 3, 4]
arr2 = [5, 6, 7, 8]
console.log(arr1.concat(arr2))
console.log(arr1)