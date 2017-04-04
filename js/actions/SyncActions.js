import Database from '../database/Database';
import types from './ActionTypes';

export function syncProgress() {
  return (dispatch, getState) => {
    Database
      .syncQuestsProgress(getState().user.uid, getState().progress)
      .then((newProgress) => {
        dispatch(syncProgressSuccess(newProgress));
      });
  };
}

export function syncProgressSuccess(newProgress) {
  return { type: types.SYNC_PROGRESS_SUCCESS, newProgress };
}
