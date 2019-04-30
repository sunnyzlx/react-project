import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

// 自己用
const changeHomeData = (data) => ({
  type: actionTypes.GET_HOME_DATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

const addMoreList = (data, page) => ({
  type: actionTypes.ADD_MORE_DATA,
  articleList: fromJS(data),
  page
})

// 需导出
const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then(res => {
      const data = res.data.data;
      dispatch(changeHomeData(data));
    })
  }
}

const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('api/listData.json?page='+page).then(res => {
      const data = res.data.data;
      dispatch(addMoreList(data, page++));
    })
  }
}

export { getHomeData, getMoreList }