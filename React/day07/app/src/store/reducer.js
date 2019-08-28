import date from '../utils/date'
const initState = {
  inputValue: '',
  listData: [{
    text: '备忘录1',
    time: '2019-10-10',
    status: '已完成'
  }, {
    text: '备忘录2',
    time: '2019-10-10',
    status: '未完成'
  }, {
    text: '备忘录3',
    time: '2019-10-10',
    status: '已完成'
  },]
}

export default (state = initState, action) => {
  if (action.type === 'TO_CHANGE_INPUT') {
    return {
      ...state,
      inputValue: action.value
    }
  }
  if (action.type === 'TO_ADD') {
    let obj = {
      text: state.inputValue,
      time: date.parseDate(),
      status: '未完成'
    }
   let {listData} = state
   listData.push(obj)
    return {
      ...state,
      listData,
      inputValue:''
    }
    
  }
  if (action.type === 'TO_CHANGE_STATUS') {
    let { listData } = state
    listData[action.index].status = "已完成"
    return {
      ...state,
      listData
    }
  }
  if (action.type === 'TO_DELETE') {
    let { listData } = state
    listData.splice(action.index,1)
    return {
      ...state,
      listData
    }
  }
  return {
    ...state
  }
}