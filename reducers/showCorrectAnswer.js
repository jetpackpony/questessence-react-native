import { QuestionStates } from '../actions/Actions';

export default (state, action) => {
  return {
    ...state,
    progress: {
      ...state.progress,
      [action.questId]: {
        ...state.progress[action.questId],
        currentQuestionState: QuestionStates.SHOW_ANSWER
      }
    }
  };
};
