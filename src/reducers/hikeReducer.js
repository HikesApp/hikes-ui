import { combineReducers } from 'redux';

const items = (state = [], action) => {
  if (action.type === 'FETCH_HIKES_SUCCESS') {
    return action.response;
  }
  return state;
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_HIKES_FAILURE':
    case 'FETCH_HIKES_SUCCESS':
      return false;
    case 'FETCH_HIKES_REQUEST':
      return true;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_HIKES_FAILURE':
      return action.message;
    case 'FETCH_HIKES_REQUEST':
    case 'FETCH_HIKES_SUCCESS':
      return null;
    default:
      return state;
  }
};

export default combineReducers({ items, errorMessage, isFetching });
