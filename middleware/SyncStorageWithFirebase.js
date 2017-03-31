import Database from '../database/Database';
import { syncProgress } from '../actions/Actions';

export default ({ getState, dispatch }) => (next) => (action) => {
  let result = next(action);
  const state = getState();
  let uid = state.user.uid;
  if (uid && action.updatingProgress) {
    Database
      .syncQuestsProgress(uid, state.progress)
      .then((newProgress) => {
        console.log("Synced progress to remote store", newProgress);
      });
  }
  return result;
};
