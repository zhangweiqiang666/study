import React, { Component } from 'react';

class MyC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello'
    }
  }
  
  render() {
    return (
      <div>
        <h3>{this.state.msg}</h3>
        <h4>{this.props.parentMsg}</h4>
        <button onClick={this.props.changeState}>点击修改父组件的中state数据</button>
      </div>
    );
  }
}

export default MyC;