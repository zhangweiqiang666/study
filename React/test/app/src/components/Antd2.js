import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Table, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '描述',
    dataIndex: 'comment',
  },
  {
    title: '父栏目',
    dataIndex: 'parent.name',
  },
  {
    title: '操作',
    render: () => (
      <div >
        <Icon type="edit" style={{ color: "green", fontSize: 20, margin: "0 5px" }} />
        <Icon type="delete" style={{ color: "red", fontSize: 20, margin: "0 5px" }} />
      </div>

    ),
  },
];

class Antd2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {
    fetch("http://134.175.154.93:8099/manager/category/findAllCategory")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          this.setState({
            data: result.data
          })
        },
        // 注意：需要在此处处理错误
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Antd2;
