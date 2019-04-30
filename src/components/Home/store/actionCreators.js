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

// 需导出
const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then(res => {
      const data = res.data.data;
      dispatch(changeHomeData(data));
    })
  }
}

export { getHomeData }