/* eslint-env node, mocha */
/* global chai, expect, sinon */

import sinonChai from 'sinon-chai';
import * as actions from './hikeActions';

chai.use(sinonChai);

describe('hikeActions', () => {
  let dispatch;
  let api;

  beforeEach(() => {
    dispatch = sinon.spy();
    api = {
      fetchHikes: sinon.stub(),
    };
    api.fetchHikes.returns(Promise.resolve());
  });

  describe('fetchHikes', () => {
    it('dispatches FETCH_HIKES_REQUEST action', () => {
      actions.fetchHikes()(dispatch, null, api);

      expect(dispatch).to.have.been.calledWith({ type: 'FETCH_HIKES_REQUEST' });
    });

    it('dispatches FETCH_HIKES_SUCCESS action when promise gets resolved', () => {
      const expectedHikes = [{ name: 'hike1' }, { name: 'hike2' }];
      api.fetchHikes.returns(Promise.resolve(expectedHikes));

      return actions.fetchHikes()(dispatch, null, api).then(() => {
        const expectedAction = { type: 'FETCH_HIKES_SUCCESS', response: expectedHikes };
        expect(dispatch).to.have.been.calledWith(expectedAction);
      });
    });

    it('dispatches FETCH_HIKES_ERROR action when promise gets rejected', () => {
      const error = { message: 'some message' };
      api.fetchHikes.returns(Promise.reject(error));

      return actions.fetchHikes()(dispatch, null, api).then(() => {
        const expectedAction = { type: 'FETCH_HIKES_FAILURE', message: 'some message' };
        expect(dispatch).to.have.been.calledWith(expectedAction);
      });
    });
  });
});
