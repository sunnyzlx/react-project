import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../components/Header/store';
import { reducer as homeReducer } from '../components/Home/store';
import { reducer as detailReducer } from '../components/Detail/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})

export default reducer;