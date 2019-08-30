import React, { Component } from 'react';
import { Card, Col, Row, Button, Drawer, Form, Input, Icon, Switch } from 'antd';
import axios from 'axios';
const { Meta } = Card;

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      form: {
        nickname: '',
        password: '',
        enterPassword: '',
        username: '',
        email: ''
      }
    }
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
      form: {}
    });
  };
  // 查找所有用户
  findAllUser() {
    axios.get('/manager/user/findAllUser').then((res) => {
      res = res.data
      this.setState({
        userData: res
      })
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  componentDidMount() {
    this.findAllUser()
  }
  // 表单数据改变
  formChange = (attr, e) => {
    this.setState({
      form: {
        ...this.state.form,
        [attr]: e.target.value
      }
    })
  }
  toSave = () => {
    let obj = {
      nickname: this.state.form.nickname,
      password: this.state.form.password,
      username: this.state.form.username,
      email: this.state.form.email
    }
    axios.post('/manager/user/saveOrUpdateUser', obj).then((res) => {
      console.log(res)
      this.findAllUser();
      this.onClose()
    }).catch((err) => {
      console.log(err)
    })
  }
  changeSwitch = (id, status) => {
    console.log(status,'-------',id);
    axios.post('/manager/user/changeStatus', { status, id}).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
  }
  deleteUser =(id)=>{
    axios.get('/manager/user/deleteUserById', {params: {
      id
    }}).then((res) => {
      this.findAllUser()
    }).catch((err) => {
      console.log(err);
    })
  }
  render() {
    const { form } = this.state
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            新增
          </Button></div>
        <Row gutter={16}>
          {
            this.state.userData.map((item) => {
              return <Col xs={24} sm={12} md={8} xl={6} style={{ marginBottom: 16 }} key={item.id}>
                <Card cover={<img src={item.userface ? item.userface : "http://www.zwq666.top/myWorkspace/images/2.png"} />} actions={[<Switch id={item.id} checkedChildren="开" unCheckedChildren="关" defaultChecked={item.enabled} onChange={this.changeSwitch.bind(this, item.id)}></Switch>,
                  <Icon type="delete" onClick={this.deleteUser.bind(this, item.id)} />
                 
                ]} style={{ boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)', borderRadius: 6 }}>
                  <Meta title="用户名" description={item.nickname ? item.nickname : '-'} />
                  <Meta title="真实姓名" description={item.username ? item.username : '-'} />
                  <Meta title="注册时间" description={item.regTime ? item.regTime : '-'} />
                  <Meta title="Email" description={item.email ? item.email : '-'} />
                </Card>
              </Col>
            })
          }
        </Row>


        <Drawer
          title="Create a new account"
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Form.Item label="用户名">
              <Input placeholder="Please enter user name" value={form.nickname} onChange={this.formChange.bind(this, 'nickname')} />
            </Form.Item>
            <Form.Item label="密码"
              required="true">

              <Input type="password" placeholder="Please enter user name" value={form.password} onChange={this.formChange.bind(this, 'password')} />

            </Form.Item>
            <Form.Item label="确认密码">
              <Input type="password" placeholder="Please enter user name" value={form.enterPassword} onChange={this.formChange.bind(this, 'enterPassword')} />
            </Form.Item>
            <Form.Item label="真实姓名">
              <Input placeholder="Please enter user name" value={form.username} onChange={this.formChange.bind(this, 'username')} />
            </Form.Item>
            <Form.Item label="邮箱">
              <Input placeholder="Please enter user name" value={form.email} onChange={this.formChange.bind(this, 'email')} />
            </Form.Item>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button onClick={this.toSave} type="primary">
              提交
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default UserManage;