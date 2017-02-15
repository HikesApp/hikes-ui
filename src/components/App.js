import React from 'react';
import { Link } from 'react-router';

import HikeList from './HikeList';

const App = () => (
  <div>
    <HikeList />
    <Link to="/add-hike">Add hike</Link>
  </div>
);

export default App;
