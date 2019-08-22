import React from 'react';
import './App.css';
// import MyTable from './components/MyTable';
// import MyState from './components/MyState';
// import MyStatee from './components/4-MyState';
// import Live from './components/5-Live';
// import MyEvent from './components/6-MyEvent';
import MyEventt from './components/7-MyEvent';
function App() {
  let stus = [
    {
      name: 'zhangsan',
      gender: '男',
      age: 12
    }, {
      name: 'zhangsan',
      gender: '男',
      age: 12
    }, {
      name: 'zhangsan',
      gender: '男',
      age: 12
    }, {
      name: 'zhangsan',
      gender: '男',
      age: 12
    }, {
      name: 'zhangsan',
      gender: '男',
      age: 12
    },
  ]
  return (
    <div>
      {/* <MyTable stus={stus} />
      <MyState msg="propsMsg" /> */}
      {/* <MyStatee /> */}
      {/* <Live /> */}
      {/* <MyEvent /> */}
      <MyEventt />
    </div>

  );
}

export default App;
