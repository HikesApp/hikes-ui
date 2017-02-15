import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import AddHike from './AddHike';
import styles from './Root.css';


const Root = ({ store }) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <div className={styles.rootContainer}>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} />
          <Route path="/add-hike" component={AddHike} />
        </Router>
      </Provider>
    </div>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
