import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

require('skeleton-css/css/normalize.css');
require('skeleton-css/css/skeleton.css');
require('raleway-webfont/raleway.css');

const store = configureStore();
render(
  <Root store={store} />,
  document.getElementById('root')
);
