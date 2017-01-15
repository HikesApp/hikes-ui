import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset as resetForm } from 'redux-form';

import { saveHike } from '../actions/hikeActions';
import HikeForm from './HikeForm';

const createSubmitHandler = (saveHike, resetForm) => (hike) =>
  saveHike(hike).then(() => resetForm('hike'));

const AddHike = ({ saveHike, resetForm }) => (
  <div>
    <HikeForm onSubmit={createSubmitHandler(saveHike, resetForm)} />
  </div>
);

AddHike.propTypes = {
  saveHike: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};


export default connect(null, { saveHike, resetForm })(AddHike);
