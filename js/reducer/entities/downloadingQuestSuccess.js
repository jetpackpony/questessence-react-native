import { DownloadStates } from '../../constants';

export default (state, action) => {
  const byId = {
    ...state.questions.byId,
    ...action.questions
  };
  return {
    ...state,
    questions: {
      ...state.questions,
      byId,
      allIds: Object.keys(byId)
    },
    questsDownloadStates: {
      ...state.questsDownloadStates,
      [action.questId]: DownloadStates.DOWNLOADED
    }
  };
};
