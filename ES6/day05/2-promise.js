const { JSDOM } = require('jsdom')
const { window } = new JSDOM('<!DOCTYPE html>')
const $ = require('jquery')(window)
let p1 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'https://www.apiopen.top/weatherApi?city=苏州',
        method: 'GET',
        success: function (res) {
            resolve(res)
        },
        error: function (err) {
            reject(err)
        }
    })
})
let p2 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'https://www.apiopen.top/femaleNameApi?page=1',
        method: 'GET',
        success: function (res) {
            resolve(res)
        },
        error: function (err) {
            reject(err)
        }
    })
})
let p3 = new Promise((resolve, reject) => {
    $.ajax({
        url: 'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
        method: 'GET',
        success: function (res) {
            resolve(res)
        },
        error: function (err) {
            reject(err)
        }
    })
})
// 如果p1 p2 p3 都执行成功 ？  其他情况 ？
// let p = Promise.all([p1, p2, p3]);
// p.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);

// })

// 谁执行的快 就用谁的结果
let p = Promise.race([p1, p2, p3]);
p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);

})

