import Database from '../database/Database';
import { syncProgress } from '../actions/Actions';

export default ({ getState }) => (next) => (action) => {
  let result = next(action);
  const state = getState();
  const updateProgress = state.progress.timestamp === action.timestamp;
  let uid = state.user.uid;
  if (uid && updateProgress) {
    Database
      .syncQuestsProgress(uid, state.progress)
      .then((newProgress) => {
        console.log("Synced progress to remote store", newProgress);
      });
  }
  return result;
};
