import React, { Component } from 'react';
import { HashRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import Course from './HomeChilds/Course';
import Student from './HomeChilds/Student';
class Home extends Component {
  render() {
    return (

      <div>
        <HashRouter>
          <div>
            <NavLink to="/student">学生管理</NavLink>
            <NavLink to="/course">课程管理</NavLink>
            <NavLink to="/classroom">教室管理</NavLink>
          </div>
          <Switch>
            <Redirect exact from='/' to='/student'></Redirect>
            <Route path='/course' component={Course}></Route>
            <Route path='/student' component={Student}></Route>
            {/* 动态路由 */}
            <Route path='/sc/:param' component={Course}></Route>

          </Switch>
        </HashRouter>
      </div>


    )
  }
}

export default Home;