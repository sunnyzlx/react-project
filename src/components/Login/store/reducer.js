import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch(action.type)  {
    case actionTypes.LOGIN:
      return state.set('login', true)
    case actionTypes.LOGOUT:
      return state.set('login', false)
    default:
      return state;
  }
}