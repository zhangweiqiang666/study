// Test2组件
// 使用React-Redux去做
import React from 'react';
import { connect } from 'react-redux';
import { changeTest2A, toGetDataA} from '../store/actionCreators/test2Action';
const Test2 = (props) => {
  return (
    <div>
      <h3>React-Redux</h3>
      {JSON.stringify(props)}
      <button onClick={props.changeTest2}>修改数据</button>
      <button onClick={props.toGetData}>获取数据</button>
      {JSON.stringify(props.test2.arr)}
    </div>
  );
}
const mapDispatchToProps = (dispatch,ownProps) =>{
  return {
    changeTest2:()=>{
      dispatch(changeTest2A('0000'))
    },
    toGetData:()=>{
      dispatch(changeTest2A('0000'))
    }
  }
}
export default connect(state => state, mapDispatchToProps)(Test2)