import React, { Component } from 'react';
import { HashRouter, NavLink, Route, Redirect } from 'react-router-dom';
import { Switch, Icon } from 'antd';

class Student extends Component {
  // api形式的路由跳转
  toCourse = () => {
    this.props.history.push({
      pathname: '/course'
    })
  }

  render() {
    return (
      <div>
        学生管理 <button onClick ={this.toCourse}>Api跳转</button>
        <NavLink to="/course?name=张三">NavLink跳转</NavLink>
        <NavLink to="/sc/2?name=李四">NavLink动态路由跳转</NavLink>

        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <br />
        <Switch checkedChildren="1" unCheckedChildren="0" />
        <br />
        <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="close" />}
          defaultChecked
        />
      </div>
    );
  }
}

export default Student;