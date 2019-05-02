import { fromJS } from 'immutable';
import  * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
})

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: action.topicList,
		articleList: action.articleList,
		recommendList: action.recommendList
	}); 
}

const addArticleList = (state, action) => {
	return state.merge({
		articleList: state.get('articleList').concat(action.articleList),
		articlePage: action.page
	});
}

export default (state = defaultState, action) => {
  switch(action.type)  {
		case actionTypes.GET_HOME_DATA:
		  return changeHomeData(state, action);
		case actionTypes.ADD_MORE_DATA:
		  return addArticleList(state, action);
		case actionTypes.TOGGLE_SCROLL_TOP:
		  return state.set('showScroll', action.show);
    default:
      return state;
  }
}
