// Test2Action创建器
import { CHANGE_TEST2 } from '../actionType';
import { TO_GET_DATA } from '../actionType';
export const changeTest2A = (value) => {
  // 返回action对象
  return {
    type: CHANGE_TEST2,
    value
  }
}
export const toGetDateA = () => {
  // 返回action对象
  return {
    type: TO_GET_DATA,
  }
}
