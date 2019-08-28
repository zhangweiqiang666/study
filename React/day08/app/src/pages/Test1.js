// Test1组件
// 展示store中的数据
import React, { Component } from 'react';
import store from '../store';
import { changeTest1A } from '../store/actionCreators/test1Action';
import { changeTest2A } from '../store/actionCreators/test2Action';
class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.changeState);
  }
  changeState=()=>{
    this.setState(store.getState())
  }
  changeTest1 = () => {
    //分发action
    store.dispatch(changeTest1A('123'));
  }
  changeTest2 = () => {
    store.dispatch(changeTest2A('456'));
  }
  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        hello
        <button onClick={this.changeTest1}>更改test1的数据</button>
        <button onClick={this.changeTest2}>更改test2的数据</button>
      </div>
    );
  }
}

export default Test1;