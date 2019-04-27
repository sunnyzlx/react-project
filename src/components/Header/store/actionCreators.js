import * as actionTypes from './actionTypes';
import axios from 'axios'; 
import { fromJS } from 'immutable';

// 给自己用的
const changeSearchList = (data) => ({
  type: actionTypes.SEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

// 需要导出的
const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

const mouseEnter = () => ({
  type: actionTypes.MOUSE_IN
})

const mouseLeave = () => ({
  type: actionTypes.MOUSE_OUT
})

const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data.data
      dispatch(changeSearchList(data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export {
  searchFocus,
  searchBlur,
  getList,
  mouseEnter,
  mouseLeave
}