import { ActionTypes } from '../actions/Actions';

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

const getReducer = (actionType) => {
  switch (actionType) {
    case ActionTypes.DELETE_QUEST: return deleteQuest;
    case ActionTypes.PURCHASE_QUEST_START: return purchaseQuestStart;
    case ActionTypes.PURCHASE_QUEST_SUCCESS: return purchaseQuestSuccess;
    case ActionTypes.DOWNLOADING_QUEST_START: return downloadQuestStart;
    case ActionTypes.DOWNLOADING_QUEST_SUCCESS: return downloadQuestSuccess;
    case ActionTypes.START_QUEST: return startQuest;
    case ActionTypes.ANSWER_QUESTION: return answerQuestion;
    case ActionTypes.SHOW_CORRECT_ANSWER: return showCorrectAnswer;
    case ActionTypes.GOTO_NEXT_QUESTION: return goToNextQuestion;
    case ActionTypes.UPDATE_QUEST_LIST: return updateQuestList;
    case ActionTypes.LOGIN_SUCCESS: return loginSuccess;
    case ActionTypes.LOGIN_START: return loginStart;
    case ActionTypes.LOGOUT: return logout;
    case ActionTypes.SHOW_LOGIN_MODAL: return showLoginModal;
    case ActionTypes.HIDE_LOGIN_MODAL: return hideLoginModal;
    case ActionTypes.SYNC_PROGRESS_SUCCESS: return syncProgressSuccess;
    default: return (state = initialState, action) => state;
  }
};

const reduceState = (state = initialState, action) => {
  return getReducer(action.type)(state, action);
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
