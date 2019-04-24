import * as actionTypes from './actionTypes';
import axios from 'axios'; 
import { fromJS } from 'immutable';


const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

const getSearchList = (data) => ({
  type: actionTypes.SEARCH_LIST,
  data: fromJS(data)
})

const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data.data
      dispatch(getSearchList(data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export {
  searchFocus,
  searchBlur,
  getList
}