import React, { Component } from 'react';
import connect from 'dva';
class Article extends Component {
  componentDidMount() {
    // 发送action
  }
  render() {
    return (
      <div>
        hello
        {JSON.stringify(this.props.article)}
      </div>
    );
  }
}

export default connect(state => state)(Article);