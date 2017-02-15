import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push as navigateTo } from 'react-router-redux';

import { saveHike } from '../actions/hikeActions';
import HikeForm from './HikeForm';

const createSubmitHandler = (saveHike, navigateTo) => (hike) =>
  saveHike(hike).then(() => navigateTo('/'));

const AddHike = ({ saveHike, navigateTo }) => (
  <div>
    <HikeForm onSubmit={createSubmitHandler(saveHike, navigateTo)} />
    <Link to="/">Cancel</Link>
  </div>
);

AddHike.propTypes = {
  saveHike: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
};


export default connect(null, { saveHike, navigateTo })(AddHike);
