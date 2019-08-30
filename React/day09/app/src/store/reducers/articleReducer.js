import { CHANGE_MSG,CHANGE_ARTICLE } from "../actionTypes"

let initState = {
  msg: 'article',
  article:[]

}

export default (state = initState, action) => {
  if(action.type ===CHANGE_MSG){
    return {
      ...state,
      msg:action.value
    }
  }
  if (action.type === CHANGE_ARTICLE) {
    return {
      ...state,
      article: action.value
    }
  }
  return state
}