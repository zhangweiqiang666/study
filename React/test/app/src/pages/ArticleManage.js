import React, { Component } from 'react';
import { Table, Drawer, Form, Button, Input, Select, Radio, Icon } from 'antd';
import axios from '../utils/axios';
import config from '../utils/config';
const { Option } = Select;
class ArticleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedRowKeys: [], // Check here to configure the default column
      currentPage: 1, //当前页数
      pagination: {
        pageSize: config.pageSize,
        total: 0
      },
      currentId: undefined,
      ids: [],
      categoryData: [],
      form: {
        title: '',
        categoryId: '',
        liststyle: '',
        content: ''
      }
    };
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
  // 选中
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  // 更改页数处理程序
  pageChange = (pagination) => {
    this.setState({
      currentPage: pagination.current
    }, () => {
      this.findArticleByPage()
    })
  }
  //获取数据
  findArticleByPage = () => {
    axios.get('/manager/article/findArticle', {
      params: {
        page: this.state.currentPage - 1,
        pageSize: this.state.pagination.pageSize
      }
    }).then((res) => {
      console.log(res)
      this.setState({
        data: res.data.list,
        pagination: {
          ...this.state.pagination,
          total: res.data.total
        }
      })
    }).catch((err) => {
      console.log(err);
    });
  };
  toUpdate = (record) => {
    this.findAllCategory()
    this.setState({
      currentId: record.id,
      form: {
        ...this.state.form,
        title: record.title,
        categoryId: record.category.id,
        liststyle: record.liststyle,
        content: record.content
      }
    })
    
  }
  // 新增数据
  toSave = () => {
    let obj = {
      id: this.state.currentId,
      title: this.state.form.title,
      liststyle: this.state.form.liststyle,
      categoryId: this.state.form.categoryId,
      content: this.state.form.content
    }
    axios.post('/manager/article/saveOrUpdateArticle', obj).then((res) => {
      console.log(res)
      this.findArticleByPage();
      this.setState({
        currentId: undefined
      })
      this.onClose()
    }).catch((err) => {
      console.log(err)
    })
  }

  // 删除数据
  toDelete = (id) => {
    axios.get('/manager/article/deleteArticleById', {
      params: {
        id
      }
    }).then((res) => {
      console.log(res)
      this.findArticleByPage()
    }).catch((err) => {
      console.log(err);
    });
  }
  // 批量删除
  toBatchDelete = () => {
    axios.post('/manager/article/batchDeleteArticle', { ids: this.state.selectedRowKeys.toString() }).then(() => {
      this.setState({
        selectedRowKeys: []
      })
      // 添加提示，提示用户删除成功
      this.findArticleByPage();
    }).catch((err) => {
      console.log(err);
    });
  }
  componentDidMount() {
    this.findArticleByPage()
  }
  // 栏目信息
  findAllCategory = () => {
    axios.get('/manager/category/findAllCategory').then((res) => {
      this.setState({
        categoryData: res.data
      }, () => this.showDrawer())
    }).catch((err) => {
      console.log(err);

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
  render() {
    const columns = [
      {
        title: '文章标题',
        dataIndex: 'title',
      },
      {
        title: '所属栏目',
        dataIndex: 'category.name',
      },
      {
        title: '排列方式',
        dataIndex: 'liststyle',
      },
      {
        title: '发布时间',
        dataIndex: 'publishtime',
      },
      {
        title: '阅读次数',
        dataIndex: 'readtimes',
      },
      {
        title: '操作',
        dataIndex: '',
        render: (text, record) => {
          // text属性 
          // record 一行记录 对象
          return (
            <div>

              <Icon type="edit" style={{ fontSize: 22, color: "#3db389", margin: "0 5px" }} onClick={this.toUpdate.bind(this, record)} />
              <Icon type="delete" style={{ fontSize: 22, color: "#ff7875", margin: "0 5px" }} onClick={this.toDelete.bind(this, record.id)} />
            </div>
          )
        }
      },
    ]; 
    const { form, selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
   
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
      <div>
        {/* 模态框 */}
        <Drawer
          title="Create a new account"
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Form.Item label="标题">
              <Input placeholder="Please enter user name" value={form.title} onChange={this.formChange.bind(this, 'title')} />
            </Form.Item>
            <Form.Item label="所属栏目">
              <Select value={form.categoryId} onSelect={this.selectChange}>
                {
                  this.state.categoryData.map((item) => {
                    return <Option value={item.id} key={item.id}>{item.name}</Option>
                  })
                }
              </Select>,
                </Form.Item>
            <Form.Item label="排列方式">
              <Radio.Group>
                <Radio value="style-one" checked={form.liststyle === 'style-one'} onChange={this.formChange.bind(this, 'liststyle')}>style-one</Radio>
                <Radio value="style-two" checked={form.liststyle === 'style-two'} onChange={this.formChange.bind(this, 'liststyle')}>style-two</Radio>
              </Radio.Group>,
                </Form.Item>
            <Form.Item label="正文">
              <Input.TextArea rows={8} value={form.content} placeholder="please enter url description" onChange={this.formChange.bind(this, 'content')} />
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
          <Button type="primary" onClick={this.findAllCategory}>
            新增
          </Button>
          <Button type="danger" onClick={this.toBatchDelete} disabled={!hasSelected}>
            批量删除
          </Button>

          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `已选中 ${selectedRowKeys.length} 个` : ''}
          </span>
        </div>
        <Table rowKey="id" rowSelection={rowSelection} selectedRowKeys={this.state.selectedRowKeys} columns={columns} dataSource={this.state.data} pagination={this.state.pagination} onChange={this.pageChange} />
      </div>
    );
  }
}
export default ArticleManage;