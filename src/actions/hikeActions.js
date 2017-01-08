import * as api from '../api';

export const fetchHikes = () => (dispatch) => {
  dispatch({
    type: 'FETCH_HIKES_REQUEST',
  });

  return api.fetchHikes().then(
    response => {
      dispatch({
        type: 'FETCH_HIKES_SUCCESS',
        response,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_HIKES_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  );
};
