import { ActionTypes } from '../actions/Actions';
import { DownloadStates, QuestionStates, QuestStates } from '../actions/Actions';
import {
  getQuest, isAnswerCorrect,
  isQuestComplete, getNextQuestionId
} from './utils';

const initialProgress = {};

export default (state = initialProgress, action, fullState) => {
  switch(action.type) {
    case ActionTypes.START_QUEST:
      return {
        ...state,
        [action.questId]: {
          ...state[action.questId],
          questState: QuestStates.IN_PROGRESS,
          currentQuestion: getQuest(fullState, action.questId).questionsInOrder[0],
          currentAnswer: "",
          currentQuestionState: QuestionStates.UNANSWERED
        },
        timestamp: action.timestamp
      };
    case ActionTypes.ANSWER_QUESTION:
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
    case ActionTypes.SHOW_CORRECT_ANSWER:
      return {
        ...state,
        [action.questId]: {
          ...state[action.questId],
          currentQuestionState: QuestionStates.SHOW_ANSWER
        },
        timestamp: action.timestamp
      };
    case ActionTypes.GOTO_NEXT_QUESTION:
      let quest = getQuest(fullState, action.questId);
      let newProgress = { ...state[quest.id] };
      if (isQuestComplete(quest, newProgress)) {
        newProgress.questState = QuestStates.COMPLETED;
      } else {
        newProgress.currentQuestion = getNextQuestionId(quest, newProgress);
        newProgress.currentQuestionState = QuestionStates.UNANSWERED
        newProgress.currentAnswer = "";
      }
      return {
        ...state,
        [quest.id]: newProgress,
        timestamp: action.timestamp
      };
    case ActionTypes.DOWNLOADING_QUEST_SUCCESS:
      return {
        ...state,
        [action.questId]: {
          questState: QuestStates.NOT_STARTED
        },
        timestamp: action.timestamp
      };
    case ActionTypes.SYNC_PROGRESS_SUCCESS:
      return action.newProgress;
    case ActionTypes.DELETE_QUEST:
      let res = {
        ...state,
        timestamp: action.timestamp
      };
      delete res[action.questId];
      return res;
    default:
      return state;
  }
};
