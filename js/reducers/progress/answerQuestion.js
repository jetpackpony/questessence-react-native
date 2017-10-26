import { QuestionStates } from '../../actions/Actions';
import { isAnswerCorrect, } from '../utils';

export default (state, action, fullState) => {
  let question = fullState.entities.questions.byId[action.questionId];
  return {
    ...state,
    [action.questId]: {
      ...state[action.questId],
      currentAnswer: action.answer || "",
      currentQuestionState: isAnswerCorrect(question, action.answer)
                              ? QuestionStates.CORRECT
                              : QuestionStates.INCORRECT
    },
    timestamp: action.timestamp
  };
};

