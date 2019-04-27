import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch(action.type)  {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.SEARCH_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    case actionTypes.MOUSE_IN:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_OUT:
      return state.set('mouseIn', false);
    default:
      return state;
  }
}