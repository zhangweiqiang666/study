import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Redirect, HashRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Category from './pages/CategoryManage';
import Article from './pages/ArticleManage';
import Index from './pages/Index';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props.location)
    this.state = {
      collapsed: false,
    };
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} id="layout">
        <HashRouter>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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

            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Switch>
                <Redirect exact from='/' to='/index'></Redirect>
                <Route exact path='/index' component={Index}></Route>
                <Route path='/category' component={Category}></Route>
                <Route path='/article' component={Article}></Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center',paddingTop: '0'}}>Made by zhangweiqiang 201908</Footer>
          </Layout>
        </HashRouter>
        
      </Layout>
      
    );
  }
}

export default App;