import React from 'react';
class MyState extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      msg:'stateMsg'
    }
  }
  // 生命周期钩子函数
  // 组件挂载完毕之后调用的钩子函数
  componentDidMount(){
     alert(1);
    // 更改state的数据
    // 异步设置state数据
    this.setState({
      msg:'hello world'
    })
  }
  componentWillMount(){
    // 一般在这进行异步操作
    alert(0);
  }
  render() {
    let msg = 'renderMsg'
    return (
      <div>
        <h3>{msg}</h3>
        <h3>{this.state.msg}</h3>
        <h3>{this.props.msg}</h3>
      </div>
    )
  }
}

export default MyState