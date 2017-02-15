import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import hikes from './hikeReducer';

export default combineReducers({
  routing: routerReducer,
  form,
  hikes,
});
