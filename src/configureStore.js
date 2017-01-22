import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as api from './api';
import hikesApp from './reducers';

const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(api)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const storeEnhancer = applyMiddleware(...middlewares);

  console.log('process.env.NODE_ENV', process.env.NODE_ENV);

  return createStore(
    hikesApp,
    process.env.NODE_ENV !== 'production' ? composeWithDevTools(storeEnhancer) : storeEnhancer
  );
};

export default configureStore;
