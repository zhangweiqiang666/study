// Test1Reducer业务逻辑处理
import { CHANGE_TEST1 } from '../actionType';
let test1State = {
  msg: 'test1'
}

export default (state = test1State, action) => {
  // 业务逻辑处理
  if (action.type === CHANGE_TEST1) {
    return {
      ...state,
      msg: state.msg=== 'test1' ? action.value : 'test1'
    }

  }
  return state
}