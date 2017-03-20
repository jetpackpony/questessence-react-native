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

const isQuestComplete = (questions, currentQuestion) => {
  return questions.length >= currentQuestion + 1;
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
    case 'SHOW_CORRECT_ANSWER':
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [`quest${action.questId}`]: {
            ...state.questProgress[`quest${action.questId}`],
            currentQuestionState: QuestionStates.SHOW_ANSWER
          }
        }
      };
    case 'GOTO_NEXT_QUESTION':
      let newProgress = { ...state.questProgress[`quest${action.questId}`] };
      if (isQuestComplete(state.questData.questions[`quest${action.questId}`]), newProgress.currentQuestion) {
        newProgress.questState = QuestStates.COMPLETED;
      } else {
        newProgress.currentQuestion += 1;
        newProgress.currentQuestionState = QuestionStates.UNANSWERED
        newProgress.currentAnswer = '';
      }
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [`quest${action.questId}`]: newProgress
        }
      };
    default:
      return state;
  }
};
