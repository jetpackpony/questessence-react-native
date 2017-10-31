import { DownloadStates } from '../../actions';

export default (state, action) => {
  return {
    ...state,
    questsDownloadStates: {
      ...state.questsDownloadStates,
      [action.questId]: DownloadStates.DOWNLOADING
    }
  };
};
