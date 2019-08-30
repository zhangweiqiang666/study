import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMsg, getDataAxAction, getDataSaAction } from '../store/actionCreators/articleAction';
class Article extends Component {
  render() {
    return (
      <div>
        hello
        {JSON.stringify(this.props)}
        <button onClick={this.props.changeMsg}>点击修改</button>
        <button onClick={this.props.getData}>异步获取数据</button>
      </div>
    );
  }
}
  const mapStateToProps = (state, ownProps) => {
    return state
     
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeMsg: () => {
        dispatch(changeMsg('123'))
      },
      getData: () => {
        // dispatch(getDataAxAction({page:0,pageSize:10}))
        dispatch(getDataSaAction({ page: 0, pageSize: 10 }))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Article);