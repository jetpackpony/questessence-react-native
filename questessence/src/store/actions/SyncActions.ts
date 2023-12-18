import R from "ramda";
import { listenToProgress, uploadUserProgress } from "../database";
import types from "./ActionTypes";
import { getQuestionIndex } from "../reducer";

const merge = R.curry((state, local, remote) => {
  if (typeof remote === "number") return remote;

  return getQuestionIndex(state, local.questId, local.currentQuestion) >
    getQuestionIndex(state, remote.questId, remote.currentQuestion)
    ? local
    : remote;
});

export function syncProgress() {
  return (dispatch, getState) => {
    if (!getState().user.isLoggedIn) return;

    listenToProgress(getState().user.uid, (remoteProgress) => {
      const state = getState();
      const remote = remoteProgress || {};
      const local = state.progress;

      if (local.timestamp !== remote.timestamp) {
        const mergedProgress = R.mergeWith(merge(state), local, remote);
        uploadUserProgress(state.user.uid, mergedProgress).then(
          (newProgress) => {
            dispatch(syncProgressSuccess(newProgress));
          },
          (error) => {
            console.log("Upload user progress error", error);
          },
        );
      }
    });
  };
}

export function syncProgressSuccess(newProgress) {
  return { type: types.SYNC_PROGRESS_SUCCESS, newProgress };
}
