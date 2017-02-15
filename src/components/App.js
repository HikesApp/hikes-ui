import React from 'react';
import { Link } from 'react-router';

import HikeList from './HikeList';

const App = () => (
  <div>
    <h1>My Hikes</h1>
    <HikeList />
    <Link className="button button-primary" to="/add-hike">Add hike</Link>
  </div>
);

export default App;
