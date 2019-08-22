import React from 'react';
class MyEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello"
    }
  }
  // 使用箭头函数声明事件处理程序 可以解决函数内部的this指向
  // handle = () => {
  //   this.setState({
  //     msg: this.state.msg === 'msg' ? 'Hello' : 'msg'
  //   })
  // }
  handle() {
    this.setState({
      msg: this.state.msg === 'Bye' ? 'Hello' : 'Bye'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        {/* 1 */}
        {/* <button onClick={this.handle}>点击</button> */}
        {/* 2 */}
        < button onClick={this.handle.bind(this)} > 点击</button >
      </div >
    )
  }
}
export default MyEvent