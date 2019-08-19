'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log('default');
};

//需要导出内容 让其他模块使用
var a = 1;
var b = 2;
var test = function test() {
    console.log('test');
};
exports.a = a;
exports.b = b;

// export default {
//     name:  'zhangsan',
//     age:12
// }
exports.test = test;