import { QuestionStates } from '../actions/Actions';
import { isAnswerCorrect } from './utils';

export default (state, action) => {
  let question = state.entities.questions.byId[action.questionId];
  return {
    ...state,
    progress: {
      ...state.progress,
      [action.questId]: {
        ...state.progress[action.questId],
        currentAnswer: action.answer,
        currentQuestionState: isAnswerCorrect(question, action.answer) ? QuestionStates.CORRECT : QuestionStates.INCORRECT
      }
    }
  };
};
