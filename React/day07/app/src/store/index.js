// 仓库
import { createStore } from 'redux';
import reducer from './reducer';
// 将reducer于store绑定
export default createStore(reducer);