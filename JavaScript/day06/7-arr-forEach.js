//数组遍历
//for()
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

stus.forEach(function (item, index, arr) {
    console.log(item, index, arr)
});