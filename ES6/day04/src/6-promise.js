const { JSDOM } = require('jsdom')
const { window } = new JSDOM('<!DOCTYPE html>')
const $ = require('jquery')(window)
// console.log($.ajax)

let p = new Promise(function (resolve, reject) {
  console.log('-----------')
  $.get('http://134.175.154.93:8099/manager/category/findAllCategory', function (res) {
    console.log(res)
  })
})
p.then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
});