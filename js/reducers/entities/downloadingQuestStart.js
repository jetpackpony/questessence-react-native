import { DownloadStates } from '../../actions/Actions';

export default (state, action) => {
  return {
    ...state,
    questsDownloadStates: {
      [action.questId]: DownloadStates.DOWNLOADING
    }
  };
};
