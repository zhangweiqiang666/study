var arr = [12, 3, 5, 6, 7, 68, 76, 867]
//反转方法
console.log(arr)
// console.log(arr.reverse())
// console.log(arr)

//数组排序
function com(a, b) {
    //  return b - a
    if (a < b) {
        return -1
    }
    return 1
}
console.log(arr.sort(com))
console.log(arr)

var stus = [{
        name: 'zee',
        age: 12
    },
    {
        name: 'errw',
        age: 14
    },
    {
        name: 'ltrq',
        age: 13
    },
    {
        name: 'yuwq',
        age: 16
    },
]
console.log(stus)

function com(attr, rule) {
    return function (a, b) {
        if (rule == 'asc') {
            return a[attr] - b[attr];
        } else if (rule == 'des') {
            return b[attr] - a[attr];
        }
    }
}
console.log(stus.sort(com('age', 'asc')))


sort(com)
function com(){
    return -1
}