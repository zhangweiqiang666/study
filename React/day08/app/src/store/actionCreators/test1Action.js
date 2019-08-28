// Test1Action创建器
import {CHANGE_TEST1} from '../actionType';
export const changeTest1A = (value) => {
  // 返回action对象
  return{
    type: CHANGE_TEST1,
    value
  }
}