import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeDetailData = (data) => {
  return {
    type: actionTypes.CHANGE_DETAIL_DATA,
    title: fromJS(data.title),
    content: fromJS(data.content)
  }
}


const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detailData.json?id='+ id).then(res => {
      const data = res.data.data;
      dispatch(changeDetailData(data))
    })
  }
}

export { getDetail }