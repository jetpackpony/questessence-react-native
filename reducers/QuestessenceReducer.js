import { QuestStates, QuestionStates } from '../actions/Actions';

export const initialState = {
  questData: {
    quests: [],
    questions: {}
  },
  questProgress: {}
};

const isAnswerCorrect = (question, answer) => {
  return question.answer === answer;
};

export function QuestessenceReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_QUEST':
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [`quest${action.questId}`]: {
            questState: QuestStates.IN_PROGRESS,
            currentQuestion: 0,
            currentAnswer: '',
            currentQuestionState: QuestionStates.UNANSWERED
          }
        }
      };
    case 'ANSWER_QUESTION':
      let question = state.questData.questions[`quest${action.questId}`][action.questionId];
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [`quest${action.questId}`]: {
            ...state.questProgress[`quest${action.questId}`],
            currentAnswer: action.answer,
            currentQuestionState: isAnswerCorrect(question, action.answer) ? QuestionStates.CORRECT : QuestionStates.INCORRECT
          }
        }
      };
    default:
      return state;
  }
};
