import React, { Component } from 'react';

class Course extends Component {
  componentDidMount() {
    // Api传参 
    console.log('Api传参',this.props.location)
    // 动态路由传参
    console.log('动态路由传参', this.props.match, this.props.match.params);
    
  }
  render() {
    return (
      <div>
        课程管理
      </div>
    );
  }
}

export default Course;