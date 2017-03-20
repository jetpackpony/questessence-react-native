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
  let questId = `quest${action.questId}`;
  switch (action.type) {
    case 'START_QUEST':
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [questId]: {
            questState: QuestStates.IN_PROGRESS,
            currentQuestion: 0,
            currentAnswer: '',
            currentQuestionState: QuestionStates.UNANSWERED
          }
        }
      };
    case 'ANSWER_QUESTION':
      let question = state.questData.questions[questId][action.questionId];
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [questId]: {
            ...state.questProgress[questId],
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
          [questId]: {
            ...state.questProgress[questId],
            currentQuestionState: QuestionStates.SHOW_ANSWER
          }
        }
      };
    case 'GOTO_NEXT_QUESTION':
      let newProgress = { ...state.questProgress[questId] };
      if (isQuestComplete(state.questData.questions[questId]), newProgress.currentQuestion) {
        newProgress.questState = QuestStates.COMPLETED;
      } else {
        newProgress.currentQuestion += 1;
        newProgress.currentQuestionState = QuestionStates.UNANSWERED
        newProgress.currentAnswer = '';
      }
      debugger;
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [questId]: newProgress
        }
      };
    default:
      return state;
  }
};
