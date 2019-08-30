import React, { Component } from 'react';
import { Table, Drawer, Form, Button, Input, Select, Icon } from 'antd';
import axios from '../utils/axios';
import config from '../utils/config';
const { Option } = Select;

class CategoryManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no: 1,
      form: {},
      selectedRowKeys: [],
      data: [],
      currentId: undefined
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
  // 查找所有栏目
  findAllCategory = () => {
    axios.get('/manager/category/findAllCategory').then((res) => {
      this.setState({
        data: res.data
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  componentDidMount() {
    this.findAllCategory()
  }
  // 保存数据
  toSave = () => {
    let obj = {
      id: this.state.currentId,
      name: this.state.form.name,
      comment: this.state.form.comment,
      parentId: this.state.form.categoryId,
      no: this.state.no
    }
    axios.post('/manager/category/saveOrUpdateCategory', obj).then((res) => {
      console.log(res)
      this.findAllCategory();
      this.setState({
        currentId: undefined
      })
      this.onClose()
    }).catch((err) => {
      console.log(err)
    })
  }
  // 表单控件更改
  formChange = (attr, e) => {
    this.setState({
      form: {
        ...this.state.form,
        [attr]: e.target.value
      }
    })
  }
  selectChange = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        categoryId: value
      }
    })
  }
  toUpdate = (record) => {
    let categoryId = record.parent ? record.parent.id : undefined
    this.setState({
      currentId: record.id,
      form: {
        ...this.state.form,
        name: record.name,
        categoryId,
        comment: record.comment
      }
    })
    this.showDrawer()
  }
  toDelete = (id) => {
    axios.get('/manager/category/deleteCategoryById', {
      params: {
        id
      }
    }).then((res) => {
      console.log(res);
      this.findAllCategory()
    }).catch((err) => {
      console.log(err);
    })
  }
  toBatchDelete = () => {
    axios.post('/manager/category/batchDeleteCategory', {
      ids: this.state.selectedRowKeys.toString()
    }).then(() => {
      this.setState({
        selectedRowKeys: []
      })
      this.findAllCategory()
    }).catch((err) => {
      console.log(err);

    })
  }

  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({ selectedRowKeys });
      }
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
        render: (record) => (
          <div>
            <Icon type="edit" style={{ fontSize: 22, color: "#3db389", margin: "0 5px" }} onClick={this.toUpdate.bind(this, record)} />
            <Icon type="delete" style={{ fontSize: 22, color: "#ff7875", margin: "0 5px" }} onClick={this.toDelete.bind(this, record.id)} />
          </div>
        ),
      },
    ];
    const { form, selectedRowKeys } = this.state;
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Drawer
          title="Create a new account"
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Form.Item label="栏目名称">
              <Input placeholder="Please enter user name" value={form.name} onChange={this.formChange.bind(this, 'name')} />
            </Form.Item>
            <Form.Item label="父栏目">
              <Select value={form.categoryId} onSelect={this.selectChange}>
                {
                  this.state.data.map((item) => {
                    return <Option value={item.id} key={item.id}>{item.name}</Option>
                  })
                }
              </Select>,
                </Form.Item>
            <Form.Item label="描述">
              <Input.TextArea rows={8} value={form.comment} placeholder="please enter url description" onChange={this.formChange.bind(this, 'comment')} />
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


        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            新增
          </Button>
          <Button type="danger" onClick={this.toBatchDelete} disabled={!hasSelected}>
            批量删除
          </Button>

          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `已选中 ${selectedRowKeys.length} 个` : ''}
          </span>
        </div>
        <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination= {{pageSize: config.pageSize}}/>
        </div>
    );
  }
}

export default CategoryManage;
