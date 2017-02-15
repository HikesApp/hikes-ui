import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as api from './api/api';
import hikesApp from './reducers/rootReducer';

const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(api), routerMiddleware(browserHistory)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const storeEnhancer = applyMiddleware(...middlewares);

  return createStore(
    hikesApp,
    process.env.NODE_ENV !== 'production' ? composeWithDevTools(storeEnhancer) : storeEnhancer
  );
};

export default configureStore;
