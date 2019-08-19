//需要导出内容 让其他模块使用
let a = 1;
let b = 2;
let test = function () {
    console.log('test')
}
export { a, b, test }
export default function () {
    console.log('default')
  }
// export default {
//     name:  'zhangsan',
//     age:12
// }