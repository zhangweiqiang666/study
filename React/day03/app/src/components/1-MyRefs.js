import React from 'react'
class MyRefs extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      msg: 'msg'
    }
  }
  componentDidMount(){
    // 保存该组件内有ref属性并ref属性为字符串的元素
    console.log(this.refs)
    console.log(this.refs.hello);
    console.log(this.refs.world);
  }
  render(){
    return(
      <div>
        <h3 ref="hello">{this.state.msg}</h3>
        <h3 ref="world">world</h3>
      </div>
    )
  }
}
export default MyRefs