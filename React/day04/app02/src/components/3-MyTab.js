import React, { Component } from 'react';
import Index from './MyTabChild/Index';
import Student from './MyTabChild/Student';
import Course from './MyTabChild/Course';
import ClassRoom from './MyTabChild/ClassRoom';

class MyTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentCom: Index
    }
  }
  changeTab = (component) => {
    this.setState({
      CurrentCom: component
    })
  }
  render() {
    let { CurrentCom } = this.state
    return (
      <div>
        <nav>
          <button onClick={this.changeTab.bind(this, { Index })}>首页</button>
          <button onClick={this.changeTab.bind(this, { Student })}>学生管理</button>
          <button onClick={this.changeTab.bind(this, { Course })}>课程管理</button>
          <button onClick={this.changeTab.bind(this, { ClassRoom })}>教室管理</button>
        </nav>
          <CurrentCom></CurrentCom>
      </div>
      
    );
  }
}

export default MyTab;