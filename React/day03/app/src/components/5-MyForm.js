// 多表单控件的双向数据绑定 State
// 在当前组件中有很多数据 其中一些数据
import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '注册页面',
      gender: [{
        name: '男',
        value: 'male'
      }, {
        name: '女',
        value: 'female'
      }],
      // 地址
      addresses: [{
        name: '江苏',
        value: 'jiangsu'
      }, {
        name: '江西',
        value: 'jiangxi'
      }, {
        name: '山西',
        value: 'shanxi'
      }, {
        name: '南京',
        value: 'nanjing'
      },
      ],
      form: {
        username: '',
        age: 0,
        gender: '',
        address: '',
        desc: ''
      }
    }
  }
  // change事件处理程序
  inputChange = (attr, e) => {
    // 先获取form副本 修改副本中的username 在设置到state的form中去
    // let form = Object.assign({}, this.state.form)
    // form[attr] = e.target.value;
    this.setState({
      // form
      form:{
        ...this.state.form,
        [attr]: e.target.value
      }
    })
  }
  toSubmit = ()=>{
    console.log(this.state.form)
    
  }
  render() {
    const { form } = this.state;
    return (
      <div className="MyForm" style={{ padding: 20 }}>
        <h3>{this.state.msg}</h3>
        <form action="">
          <div>用户名：<input type="text" value={form.username} onChange={this.inputChange.bind(this, 'username')} /></div>
          <div>年龄：<input type="number" min="0" value={form.age} onChange={this.inputChange.bind(this, 'age')} /></div>
          <div>
            性别：
            {
              this.state.gender.map((item, index) => {
                return (
                  <label key={index}>
                    <input type="radio" value={item.value} checked={item.value === form.gender} onChange={this.inputChange.bind(this, 'gender')} />{item.name}</label>
                )
              })
            }
            {/* <input type="radio" name="gender" />男 <input type="radio" name="gender" />女 */}
          </div>
          <div>地址：<select name="" id="" value={form.address} onChange={this.inputChange.bind(this, 'address')}>
            <option value="">请选择</option>
            {
              this.state.addresses.map((item, index) => {
                return <option key={index} value={item.value}>{item.name}</option>
              })
            }
          </select></div>

          <div>描述：<textarea name="" id="" cols="30" rows="10" value={form.desc} onChange={this.inputChange.bind(this, 'desc')}></textarea></div>
        </form>
        <button onClick={this.toSubmit}>提交给后台</button>
      </div>
    );
  }
}

export default MyForm;