// yarn add react-router-dom
import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, NavLink, Router, Route, Redirect } 
from 'react-router-dom';
import Index from './MyTabChild/Index';
import Student from './MyTabChild/Student';
import Course from './MyTabChild/Course';
import ClassRoom from './MyTabChild/ClassRoom';
import './MyRouter.scss'
class MyRoute extends Component {
  render() {
    return (
      <HashRouter>
        <nav>
          <NavLink exact activeClassName="navActive" to="/">首页</NavLink>
          <NavLink activeClassName="navActive" to="/student">学生管理</NavLink>
          <NavLink activeClassName="navActive" to="/course">课程管理</NavLink>
          <NavLink activeClassName="navActive" to="/classroom">教室管理</NavLink>
        </nav>
        {/* 展示的组件 */}
        <div>
          <Router>
            <Redirect from="/student" to="/course"></Redirect>
            <Route exact path='/' component={Index}></Route>
            {/* <Route path='/student' component={Student}></Route> */}
            <Route path='/course' component={Course}></Route>
            <Route path='/classroom' component={ClassRoom}></Route>
          </Router>
        </div>
      </HashRouter>
    );
  }
}
export default MyRoute;