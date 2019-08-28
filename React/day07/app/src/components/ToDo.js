import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import store from '../store';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.changeState); //订阅者做的是
  }
  changeState = () => {
    this.setState({
      ...store.getState()
    })
  }
  inputChange = (e) => {
    let action = {
      type: 'TO_CHANGE_INPUT',
      value: e.target.value
    }
    store.dispatch(action)
  }
  toAdd = (e) => {
    let action = {
      type: 'TO_ADD',
      value: e.target.value
    }
    store.dispatch(action)
  }
  toChangeStatus=(index)=>{
    let action = {
      type: 'TO_CHANGE_STATUS',
      index
    }
    store.dispatch(action)
  }
  toDelete=(index)=>{
    let action = {
      type: 'TO_DELETE',
      index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <h2>备忘录</h2>
        <div>
          <Input type="text" value={this.state.inputValue} onChange={this.inputChange} />
          <Button type="primary" onClick={this.toAdd}>添加</Button>
        </div>
        <List
          header={<div>列表</div>}
          bordered
          dataSource={this.state.listData}
          renderItem={(item,index) => (
            <List.Item>
              <List.Item.Meta
                title={<span style={{ color: item.status ==='已完成'?'green':'red'}}>
                  [{item.status}] {item.text} {item.time}
                </span>
                }
              />
              <div>
                {
                  item.status === '未完成' && <Button type="link" onClick={this.toChangeStatus.bind(this, index)}>完成</Button>

                }

                <Button onClick={this.toDelete.bind(this, index)}>删除</Button>

              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ToDo;