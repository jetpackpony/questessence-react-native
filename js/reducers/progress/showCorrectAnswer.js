import { QuestionStates } from '../../actions/Actions';

export default (state, action) => {
  return {
    ...state,
    [action.questId]: {
      ...state[action.questId],
      currentQuestionState: QuestionStates.SHOW_ANSWER
    },
    timestamp: action.timestamp
  };
};

