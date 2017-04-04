import { DownloadStates } from '../actions/Actions';

export const downloadQuestStart = (state, action) => {
  return {
    ...state,
    downloadedQuests: {
      [action.questId]: DownloadStates.DOWNLOADING
    }
  };
};

export const downloadQuestSuccess = (state, action) => {
  const questions = action.questions;
  const ids = Object.keys(questions);
  return {
    ...state,
    entities: {
      ...state.entities,
      questions: {
        ...state.entities.questions,
        byId: {
          ...state.entities.questions.byId,
          ...questions
        },
        allIds: state.entities.questions.allIds.concat(ids)
      }

    },
    downloadedQuests: {
      [action.questId]: DownloadStates.DOWNLOADED
    }
  };
};
