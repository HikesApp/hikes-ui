import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import styles from './HikeForm.css';

const HikeForm = ({ handleSubmit }) => (
  <form className={styles.form} onSubmit={(hike) => handleSubmit(hike)}>
    <h2>Create a new hike</h2>
    <div className="row">
      <div className="six columns">
        <label htmlFor="name">Hike Name</label>
        <Field className="u-full-width" name="name" component="input" type="text" />
      </div>
      <div className="six columns">
        <label htmlFor="startDate">Start date (yyyy-MM-dd)</label>
        <Field className="u-full-width" name="startDate" component="input" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="six columns">
        <label htmlFor="endDate">End date (yyyy-MM-dd)</label>
        <Field className="u-full-width" name="endDate" component="input" type="text" />
      </div>
      <div className="six columns">
        <label htmlFor="distance">Distance (km)</label>
        <Field className="u-full-width" name="distance" component="input" type="number" />
      </div>
    </div>
    <div className={styles.footer}>
      <button className="button-primary" type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </div>
  </form>
);

HikeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const formConfig = {
  form: 'hike',
};
export default reduxForm(formConfig)(HikeForm);
