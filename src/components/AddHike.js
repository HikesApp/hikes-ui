import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push as navigateTo } from 'react-router-redux';

import { saveHike } from '../actions/hikeActions';
import HikeForm from './HikeForm';

const createSubmitHandler = (saveHike, navigateTo) => (hike) =>
  saveHike(hike).then(() => navigateTo('/'));

const AddHike = ({ saveHike, navigateTo }) => (
  <HikeForm onSubmit={createSubmitHandler(saveHike, navigateTo)} />
);

AddHike.propTypes = {
  saveHike: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
};


export default connect(null, { saveHike, navigateTo })(AddHike);
