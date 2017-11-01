import { QuestionStates } from '../../constants';

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

