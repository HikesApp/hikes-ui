import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import 'raleway-webfont/raleway.css';

import configureStore from './configureStore';

const store = configureStore();
render(
  <Root store={store} />,
  document.getElementById('root')
);
