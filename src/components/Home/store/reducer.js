import { fromJS } from 'immutable';
import  * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
	articleList: [],
	recommendList: []
})

export default (state = defaultState, action) => {
  switch(action.type)  {
		case actionTypes.GET_HOME_DATA:
		  return state.merge({
				topicList: action.topicList,
				articleList: action.articleList,
				recommendList: action.recommendList
			}) 
    default:
      return state;
  }
}
