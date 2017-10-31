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
      const state = getState();
      const remote = remoteProgress || {};
      const local = state.progress;

      if (local.timestamp !== remote.timestamp) {
        const mergedProgress = R.mergeWith(
          merge(state), local, remote
        );
        Database
          .uploadUserProgress(state.user.uid, mergedProgress)
          .then(
            (newProgress) => {
              dispatch(syncProgressSuccess(newProgress));
            },
            (error) => {
              console.log("Upload user progress error", error);
            }
          );
      }
    });
  };
}

export function syncProgressSuccess(newProgress) {
  return { type: types.SYNC_PROGRESS_SUCCESS, newProgress };
}
