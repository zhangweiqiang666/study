import { CHANGE_TEST2, TO_GET_DATA } from "../actionType"
import axios from 'axios';
// Test2Reducer业务逻辑处理
let test2State = {
  msg: 'test2',
  arr: []
}

export default (state = test2State, action) => {
  if (action.type === CHANGE_TEST2) {
    return {
      ...state,
      msg: state.msg === 'test2' ? action.value : 'test2'
    }
  }
  if (action.type === TO_GET_DATA) {
    axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then((res) => {
      let arr = res.data.data
      return {
        ...state,
        arr
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  return state
}