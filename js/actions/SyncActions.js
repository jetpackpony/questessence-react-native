import R from 'ramda';
import Database from '../database/Database';
import types from './ActionTypes';
import { getQuestionIndex } from '../reducers/QuestessenceReducer';

const merge = R.curry((state, local, remote) => {
  if (typeof remote === "number") return remote;

  return (
    getQuestionIndex(state, local.questId, local.currentQuestion) >
      getQuestionIndex(state, remote.questId, remote.currentQuestion)
  )
    ? local
    : remote;
});

export function syncProgress() {
  return (dispatch, getState) => {
    if (!getState().user.isLoggedIn) return;

    Database.listenToProgress(getState().user.uid, (remoteProgress) => {
      remoteProgress = remoteProgress || {};
      const state = getState();

      if (state.progress.timestamp !== remoteProgress.timestamp) {
        const mergedProgress = R.mergeWith(
          merge(state), state.progress, remoteProgress
        );
        Database
          .uploadUserProgress(state.user.uid, mergedProgress)
          .then(
            (newProgress) => {
              dispatch(syncProgressSuccess(newProgress));
            },
            (error) => {
              console.log("SYNC PROGRESS ERROR", error);
            }
          );
      }
    });
  };
}

export function syncProgressSuccess(newProgress) {
  return { type: types.SYNC_PROGRESS_SUCCESS, newProgress };
}
