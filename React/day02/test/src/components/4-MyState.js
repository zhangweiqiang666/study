import React from 'react';
class MyState extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      arr:[1,2],
      obj:{
        name:'zhangsan',
        age:12
      }
    }
  }
  componentWillMount(){
    // 在原先的数组之上追加数据
    // this.state.arr.push(3)
    this.setState({
      arr:[...this.state.arr,3],
      obj:Object.assign({},this.state.obj,{
        name:'lisi',
        age:15,
        gender:'男'
      })
    })
  }
  render() {
    return (
      <div>
        <h3>{this.state.arr.toString()}---{JSON.stringify(this.state.obj)}</h3>
      </div>
    )
  }
}
export default MyState