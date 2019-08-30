// 处理业务逻辑
import { takeEvery, put } from 'redux-saga/effects';
import {GET_DATA_SA_ACTION }from './actionTypes';
import { getDataSaAction, changeArticles } from './actionCreators/articleAction';
import axios from 'axios';
function* mySagas() {
  yield takeEvery(GET_DATA_SA_ACTION, getList)
}
function* getList(action) {
  // 发送异步 异步成功之后分发action
  let res = yield axios.get('http://134.175.154.93:8099/manager/article/findArticle', { params: action.value })
  yield put(changeArticles(res.data.data.list))
}
export default mySagas