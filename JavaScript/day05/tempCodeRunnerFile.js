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