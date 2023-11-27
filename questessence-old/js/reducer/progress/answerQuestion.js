import { QuestionStates } from '../../constants';
import { isAnswerCorrect, } from '../../reducer';

export default (state, action, fullState) => {
  let question = fullState.entities.questions.byId[action.questionId];
  return {
    ...state,
    [question.quest]: {
      ...state[question.quest],
      currentAnswer: action.answer || "",
      currentQuestionState: isAnswerCorrect(question, action.answer)
                              ? QuestionStates.CORRECT
                              : QuestionStates.INCORRECT
    },
    timestamp: action.timestamp
  };
};

