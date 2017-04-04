import { QuestStates, QuestionStates, ActionTypes } from '../actions/Actions';

import deleteQuest from './deleteQuest';
import {
  purchaseQuestSuccess, purchaseQuestStart
} from './purchaseQuest';
import { downloadQuestStart, downloadQuestSuccess } from './downloadQuest';
import startQuest from './startQuest';
import answerQuestion from './answerQuestion';
import showCorrectAnswer from './showCorrectAnswer';
import goToNextQuestion from './goToNextQuestion';
import updateQuestList from './updateQuestList';
import {
  loginSuccess, logout, loginStart,
  showLoginModal, hideLoginModal
} from './login';
import { syncProgressSuccess }from './syncProgress';

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
  progress: {},
  user: {
    "isLoggedIn": false,
    "uid": null
  },
  downloadedQuests: {},
  isLoginModalShown: false,
  isLoggingInSpinnerShown: false,
  isPurchasingSpinnerShown: false
};

const reduceState = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_QUEST: return deleteQuest(state, action);
    case ActionTypes.PURCHASE_QUEST_START: return purchaseQuestStart(state, action);
    case ActionTypes.PURCHASE_QUEST_SUCCESS: return purchaseQuestSuccess(state, action);
    case ActionTypes.DOWNLOADING_QUEST_START: return downloadQuestStart(state, action);
    case ActionTypes.DOWNLOADING_QUEST_SUCCESS: return downloadQuestSuccess(state, action);
    case ActionTypes.START_QUEST: return startQuest(state, action);
    case ActionTypes.ANSWER_QUESTION: return answerQuestion(state, action);
    case ActionTypes.SHOW_CORRECT_ANSWER: return showCorrectAnswer(state, action);
    case ActionTypes.GOTO_NEXT_QUESTION: return goToNextQuestion(state, action);
    case ActionTypes.UPDATE_QUEST_LIST: return updateQuestList(state, action);
    case ActionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
    case ActionTypes.LOGIN_START: return loginStart(state, action);
    case ActionTypes.LOGOUT: return logout(state, action);
    case ActionTypes.SHOW_LOGIN_MODAL: return showLoginModal(state, action);
    case ActionTypes.HIDE_LOGIN_MODAL: return hideLoginModal(state, action);
    case ActionTypes.SYNC_PROGRESS_SUCCESS: return syncProgressSuccess(state, action);
    default: return state;
  }
};

const addTimestamp = (state, action) => {
  if (action.timestamp) {
    return {
      ...state,
      progress: {
        ...state.progress,
        timestamp: action.timestamp
      }
    };
  } else {
    return state;
  }
};

export function QuestessenceReducer(state, action) {
  return addTimestamp(reduceState(state, action), action);
};
