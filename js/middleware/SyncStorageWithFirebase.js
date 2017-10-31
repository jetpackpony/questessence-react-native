import { uploadUserProgress } from '../database';

export default ({ getState }) => (next) => (action) => {
  let result = next(action);
  const state = getState();
  const uid = state.user.uid;
  const updateProgress = state.progress.timestamp === action.timestamp;
  if (uid && updateProgress) {
    uploadUserProgress(uid, state.progress)
      .then((newProgress) => {
        console.log("Synced progress to remote store", newProgress);
      });
  }
  return result;
};
