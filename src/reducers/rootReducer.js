import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import hikes from './hikeReducer';

export default combineReducers({
  form,
  hikes,
});
