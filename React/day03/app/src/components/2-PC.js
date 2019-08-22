// 在父组件中修改子组件中的state中的数据
// 如何在父组件中拿到子组件的实例 如果能拿到 就可以通过子组件实例调用setState去更改子组件state的数据

import React, { Component } from 'react';
import MyC from './2-MyC';
class PC extends Component {
  constructor(props) {
    super(props);
    this.state={
      parentMsg: 'HelloParentMsg'
    }
  }
  changeChildState =(e)=>{
    const myc = this.refs.myc
    console.log(myc.state.msg)
    myc.setState({
      msg: myc.state.msg === 'Bye'?'Hello':'Bye'
    })
  }
  changeState=()=>{
    this.setState({
      parentMsg: this.state.parentMsg === 'ByeParentMsg' ? 'HelloParentMsg' : 'ByeParentMsg'
    })
  }
  render() {
    return (
      <div>
        <div ref={(node)=>{console.log(node)}}></div>
        <button onClick ={this.changeChildState}>点击更改子组件的msg</button>
        <MyC ref='myc' parentMsg={this.state.parentMsg} changeState={this.changeState}/>
      </div>
    );
  }
}

export default PC
