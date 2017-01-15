import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const HikeForm = ({ handleSubmit }) => (
  <form onSubmit={(hike) => handleSubmit(hike)}>
    <div>
      <label htmlFor="name">Hike Name</label>
      <Field name="name" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="startDate">Start date (yyyy-MM-dd)</label>
      <Field name="startDate" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="endDate">End date (yyyy-MM-dd)</label>
      <Field name="endDate" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="distance">Distance (km)</label>
      <Field name="distance" component="input" type="number" />
    </div>
    <button type="submit">Submit</button>
  </form>
);

HikeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const formConfig = {
  form: 'hike',
};
export default reduxForm(formConfig)(HikeForm);
