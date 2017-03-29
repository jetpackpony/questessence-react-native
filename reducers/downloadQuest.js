import { QuestStates } from '../actions/Actions';

export const downloadQuestStart = (state, action) => {
  return {
    ...state,
    progress: {
      ...state.progress,
      [action.questId]: {
        questState: QuestStates.DOWNLOADING
      }
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
    progress: {
      ...state.progress,
      [action.questId]: {
        questState: QuestStates.NOT_STARTED
      }
    }
  };
};

