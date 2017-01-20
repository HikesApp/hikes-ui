import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import hikesApp from './reducers';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    console.log('NOT PRODUCTION!!!!');
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
