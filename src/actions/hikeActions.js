export const fetchHikes = () => (dispatch, getState, api) => {
  dispatch({
    type: 'FETCH_HIKES_REQUEST',
  });

  return api.fetchHikes()
    .then(
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
      });
};

export const saveHike = (hike) => (dispatch, getState, api) => {
  dispatch({
    type: 'SAVE_HIKE_REQUEST',
  });

  return api.saveHike(hike)
    .then(
      response => {
        dispatch({
          type: 'SAVE_HIKE_SUCCESS',
          response,
        });
      },
      error => {
        dispatch({
          type: 'SAVE_HIKE_FAILURE',
          message: error.message || 'Something went wrong.',
        });
      });
};

export const deleteHike = (hikeId) => (dispatch, getState, api) => {
  dispatch({
    type: 'DELETE_HIKE_REQUEST',
  });

  return api.deleteHike(hikeId)
    .then(
      () => {
        dispatch({
          type: 'DELETE_HIKE_SUCCESS',
        });
      },
      error => {
        dispatch({
          type: 'DELETE_HIKE_FAILURE',
          message: error.message || 'Something went wrong.',
        });
      });
};
