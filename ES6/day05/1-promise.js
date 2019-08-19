const { JSDOM } = require('jsdom')
const { window } = new JSDOM('<!DOCTYPE html>')
const $ = require('jquery')(window)


let p = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
        method: 'GET',
        success: function (res) {
            resolve(res)
        },
        error: function (err) {
            reject(err)
        }
    })
})

let p1 = Promise.resolve(p);
p1.then(function (res) {
    console.log(res)
}).catch(function (err) {
    console.log(err)
}).finally(() => {
    // 无论结果是什么 都会执行
    console.log("finally")
})
// 如果参数是
let p2 = Promise.resolve('hello');
p2.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
})
let obj = {
    name: 'zhangsan',
    then(res) {
        console.log(res)
    }
}
let p3 = Promise.resolve(obj)

// 参数为空
let p4 = Promise.resolve()
p4.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
})