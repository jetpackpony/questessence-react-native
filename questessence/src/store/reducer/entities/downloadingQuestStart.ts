import { DownloadStates } from "../../constants";

export default (state, action) => {
  return {
    ...state,
    questsDownloadStates: {
      ...state.questsDownloadStates,
      [action.questId]: DownloadStates.DOWNLOADING,
    },
  };
};
