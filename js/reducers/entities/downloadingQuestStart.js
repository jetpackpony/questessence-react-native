import { DownloadStates } from '../../actions/Actions';

export default (state, action) => {
  return {
    ...state,
    questsDownloadStates: {
      ...state.questsDownloadStates,
      [action.questId]: DownloadStates.DOWNLOADING
    }
  };
};
