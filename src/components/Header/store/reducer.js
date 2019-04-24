import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true)
  } else if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  } else if (action.type === actionTypes.SEARCH_LIST) {
    return state.set('list', action.data)
  }
  return state;
}