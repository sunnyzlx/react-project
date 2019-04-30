import { fromJS } from 'immutable';
import  * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1
})

export default (state = defaultState, action) => {
  switch(action.type)  {
		case actionTypes.GET_HOME_DATA:
		  return state.merge({
				topicList: action.topicList,
				articleList: action.articleList,
				recommendList: action.recommendList
			}) 
		case actionTypes.ADD_MORE_DATA:
		  return state.merge({
				articleList: state.get('articleList').concat(action.articleList),
				articlePage: action.page
			})
    default:
      return state;
  }
}
