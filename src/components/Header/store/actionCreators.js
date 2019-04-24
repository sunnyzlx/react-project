import * as actionTypes from './actionTypes';

const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export {
  searchFocus,
  searchBlur
}