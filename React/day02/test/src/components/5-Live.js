import React from 'react';

class Live extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello'
    }
  }
  挂载前
  componentWillMount() {
    alert(111);
    
  }
  // 挂载后
  componentDidMount() {
    // 修改数据
    setTimeout(() => {
      this.setState({
        msg: 'World'
      })
    }, 2000);

    console.log(this.state, '----')
  }
  // 是否可以更新
  shouldComponentUpdate() {
    return true
  }
  componentWillUpdate(){
    alert('即将更新')
  }
  componentDidUpdate(){
    alert('更新完成')
  }
  // 将要被卸载
  componentWillUnmount(){
    console.log('将要被卸载')
  }
  render() {
    return (
      <div>
        {this.state.msg}
      </div>
    );
  }
}

export default Live;