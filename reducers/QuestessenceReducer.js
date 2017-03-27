import { QuestStates, QuestionStates } from '../actions/Actions';

const initialState = {
  entities: {
    "quests": {
      "byId": { },
      "allIds": [ ]
    },
    "questions": {
      "byId": { },
      "allIds": [ ]
    }
  },
  progress: {}
};

const isAnswerCorrect = (question, answer) => {
  return question.answer === answer;
};

const isQuestComplete = (quest, newProgress) => {
  const questionNumber = quest.questionsInOrder.indexOf(newProgress.currentQuestion);
  return questionNumber >= quest.questionsInOrder.length - 1;
};

const getNextQuestionId = (quest, newProgress) => {
  const questionNumber = quest.questionsInOrder.indexOf(newProgress.currentQuestion);
  if (!isQuestComplete(quest, newProgress)) {
    return quest.questionsInOrder[questionNumber + 1];
  } else {
    return null;
  }
};

export function QuestessenceReducer(state = initialState, action) {
  let quest;
  if (action.questId) {
    quest = state.entities.quests.byId[action.questId];
  }

  switch (action.type) {
    case 'DOWNLOADING_QUEST_START':
      return {
        ...state,
        progress: {
          ...state.progress,
          [quest.id]: {
            questState: QuestStates.DOWNLOADING
          }
        }
      };
    case 'DOWNLOADING_QUEST_SUCCESS':
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
          [quest.id]: {
            questState: QuestStates.NOT_STARTED
          }
        }
      };
    case 'START_QUEST':
      return {
        ...state,
        progress: {
          ...state.progress,
          [quest.id]: {
            ...state.progress[quest.id],
            questState: QuestStates.IN_PROGRESS,
            currentQuestion: quest.questionsInOrder[0],
            currentAnswer: "",
            currentQuestionState: QuestionStates.UNANSWERED
          }
        }
      };
    case 'ANSWER_QUESTION':
      let question = state.entities.questions.byId[action.questionId];
      return {
        ...state,
        progress: {
          ...state.progress,
          [quest.id]: {
            ...state.progress[quest.id],
            currentAnswer: action.answer,
            currentQuestionState: isAnswerCorrect(question, action.answer) ? QuestionStates.CORRECT : QuestionStates.INCORRECT
          }
        }
      };
    case 'SHOW_CORRECT_ANSWER':
      return {
        ...state,
        progress: {
          ...state.progress,
          [quest.id]: {
            ...state.progress[quest.id],
            currentQuestionState: QuestionStates.SHOW_ANSWER
          }
        }
      };
    case 'GOTO_NEXT_QUESTION':
      let newProgress = { ...state.progress[quest.id] };
      if (isQuestComplete(quest, newProgress)) {
        newProgress.questState = QuestStates.COMPLETED;
      } else {
        newProgress.currentQuestion = getNextQuestionId(quest, newProgress);
        newProgress.currentQuestionState = QuestionStates.UNANSWERED
        newProgress.currentAnswer = "";
      }
      return {
        ...state,
        progress: {
          ...state.progress,
          [quest.id]: newProgress
        }
      };
    case 'UPDATE_QUEST_LIST':
      return {
        ...state,
        entities: {
          ...state.entities,
          quests: action.quests
        }
      };
    default:
      return state;
  }
};
