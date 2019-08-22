import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let student = [{
  number: 1,
  name: 'zhangsan',
  gender: '男',
  age: 12
}, {
  number: 2,
  name: 'lisi',
  gender: '女',
  age: 11
}, {
  number: 3,
  name: 'wangwu',
  gender: '男',
  age: 12
}, {
  number: 4,
  name: 'zhaoliu',
  gender: '女',
  age: 12
}, {
  number: 5,
  name: 'zhouqi',
  gender: '男',
  age: 12
}, {
  number: 6,
  name: 'wuba',
  gender: '女',
  age: 12
},]
ReactDOM.render(<App student={student} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

