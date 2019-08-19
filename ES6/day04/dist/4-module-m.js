'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.a = exports.n = undefined;

var _module = require('./3-module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module2.default); // 引入3-modules.js 中的一些变量 要去使用
// import {a,b,test} from './3-module'
// console.log(a,b,test)

var n = exports.n = 5;
var a = exports.a = {
    name: 'zhangsan',
    age: 12
};