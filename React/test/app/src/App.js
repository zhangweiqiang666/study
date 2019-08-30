import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Redirect, HashRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Category from './pages/CategoryManage';
import Article from './pages/ArticleManage';
import Index from './pages/Index';
import User from './pages/UserManage';
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      style: { marginLeft: 200,
        transition: '200ms' }
    };
  }


  toggle = () => {
    let marginLeft
    if (this.state.collapsed) {
      marginLeft = 200
    } else {
      marginLeft = 80
    }
    console.log(this.state)
    this.setState({
      collapsed: !this.state.collapsed,
      style: {
        ...this.state.style,
        marginLeft
      }

    });

  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} id="layout">
        <HashRouter>
          <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0
          }} trigger={null} collapsible collapsed={this.state.collapsed} breakpoint="sm" onBreakpoint={(broken) => {
            let marginLeft
            if (!broken) {
              marginLeft = 200
            } else {
              marginLeft = 80
            }
            this.setState({
              collapsed: broken,
              style: {
                ...this.state.style,
                marginLeft
              }
            });
          }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/index']}>
              <Menu.Item key="/index">
                <NavLink to="/">
                  <Icon type="home" />
                  <span>首页</span>
                </NavLink> </Menu.Item>

              <Menu.Item key="/category"><NavLink to="/category">
                <Icon type="unordered-list" />
                <span>栏目管理</span>
              </NavLink>  </Menu.Item>

              <Menu.Item key="/article"> <NavLink to="/article">
                <Icon type="file-text" />
                <span>文章管理</span>
              </NavLink>
              </Menu.Item>
              <Menu.Item key="/user"> <NavLink to="/user">
                <Icon type="user" />
                <span>用户管理</span>
              </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={this.state.style}>
            <Header style={{ position: 'fixed', background: '#fff', padding: 0, zIndex: 1, width: '100%' }} >
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '86px 16px 24px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Switch>
                <Redirect exact from='/' to='/index'></Redirect>
                <Route path='/index' component={Index}></Route>
                <Route path='/category' component={Category}></Route>
                <Route path='/article' component={Article}></Route>
                <Route path='/user' component={User}></Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center', paddingTop: '0' }}>Made by zhangweiqiang 201908</Footer>
          </Layout>
        </HashRouter>

      </Layout>

    );
  }
}

export default App;