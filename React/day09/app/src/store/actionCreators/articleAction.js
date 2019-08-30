import { CHANGE_MSG, CHANGE_ARTICLE, GET_DATA_SA_ACTION} from "../actionTypes"
import axios from 'axios';
export const changeMsg = (value) => {
  return {
    type:CHANGE_MSG,
    value
  }
}
// // redux-thunk  actionCreate
// export const getDataAxAction = (value) => {
//   return (dispatch)=>{
//     axios.get('http://134.175.154.93:8099/manager/article/findArticle',{params: value}).then((res)=>{
//       console.log(res)
//       dispatch(changeArticles(res.data.data.list))
//     }).catch((err) => {
//       console.log(err)
//     })
//   }
// }
// // 更改
export const changeArticles = (value) =>{
  return {
    type:CHANGE_ARTICLE,
    value
  }
}


export const getDataSaAction =(value) =>{
  return {
    type: GET_DATA_SA_ACTION,
    value
  }
}