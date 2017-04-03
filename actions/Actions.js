import Database from '../database/Database';
import PurchaseAPI from '../purchaseApi/PurchaseAPI';
import { useDummyGoogleProductID } from '../config';

import { AccessToken } from 'react-native-fbsdk';
import firebase from '../database/firebase';

export const QuestStates = {
  PURCHASED: 'PURCHASED',
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export const DownloadStates = {
  NOT_DOWNLOADED: 'NOT_DOWNLOADED',
  DOWNLOADING: 'DOWNLOADING',
  DOWNLOADED: 'DOWNLOADED'
};

export const QuestionStates = {
  UNANSWERED: 'UNANSWERED',
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  SHOW_ANSWER: 'SHOW_ANSWER'
};

export function startQuest(questId) {
  return { type: 'START_QUEST', questId, updatingProgress: true };
};

export function answerQuestion(questId, questionId, answer) {
  return {
    type: 'ANSWER_QUESTION',
    questId,
    questionId,
    answer,
    updatingProgress: true
  };
};

export function showCorrectAnswer(questId) {
  return { type: 'SHOW_CORRECT_ANSWER', questId, updatingProgress: true  };
};

export function goToNextQuestion(questId) {
  return { type: 'GOTO_NEXT_QUESTION', questId, updatingProgress: true  };
};

export function updateQuestList(quests) {
  return { type: 'UPDATE_QUEST_LIST', quests };
};

export function purchaseQuest(questId, productId) {
  return (dispatch) => {
    dispatch(purchaseQuestStart(questId, productId));

    if (useDummyGoogleProductID) {
      productId = "android.test.purchased";
    }
    PurchaseAPI.purchase(productId)
      .then((res) => {
        console.log('You purchased: ', res);
        if (useDummyGoogleProductID) {
          return PurchaseAPI.consume(productId);
        }
      })
      .then(() => {
        dispatch(purchaseQuestSuccess(questId, productId));
        dispatch(showLoginModal());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function purchaseQuestStart(questId, productId) {
  return { type: 'PURCHASE_QUEST_START', questId, productId };
}

export function purchaseQuestSuccess(questId, productId) {
  return { type: 'PURCHASE_QUEST_SUCCESS', questId, productId, updatingProgress: true };
}

export function downloadQuest(questId) {
  return (dispatch) => {
    dispatch(downloadQuestStart(questId));

    Database
      .downloadQuestions(questId)
      .then((questions) => {
        dispatch(downloadQuestSuccess(questId, questions));
      });
  };
};

export function downloadQuestStart(questId) {
  return { type: 'DOWNLOADING_QUEST_START', questId };
}

export function downloadQuestSuccess(questId, questions) {
  return { type: 'DOWNLOADING_QUEST_SUCCESS', questId, questions, updatingProgress: true  };
}

export function deleteQuest(questId) {
  return { type: 'DELETE_QUEST', questId, updatingProgress: true };
}

export function loginFacebook(error, result) {
  return (dispatch) => {
    if (error) {
      console.log("login has error: ", error);
    } else if (result.isCancelled) {
      console.log("login is cancelled.", result);
    } else {
      dispatch(loginFirebaseFacebook());
    }
  };
}

export function loginFirebaseFacebook() {
  return (dispatch) => {
    AccessToken.refreshCurrentAccessTokenAsync()
      .then((userData) => {
        let credential = firebase.auth.FacebookAuthProvider.credential(userData.accessToken.toString());
        firebase.auth().signInWithCredential(credential)
          .then(() => {
            dispatch(loginSuccess(firebase.auth().currentUser));
            dispatch(syncProgress());
          })
          .catch(() => {
            console.log('FIREBASE ERROR: ', error);
          });
      })
      .catch((error) => {
        // If there is not token, logout from firebase
        dispatch(logout());
      });
  };
}

export function restoreLogin() {
  return (dispatch) => {
    dispatch(loginFirebaseFacebook());
  };
}

export function logout() {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(() => dispatch(logoutSuccess()));
  };
}

export function loginStart() {
  return { type: 'LOGIN_START' };
}

export function loginSuccess(user) {
  return { type: 'LOGIN_SUCCESS', user };
}

export function logoutSuccess() {
  return { type: 'LOGOUT' };
}

export function showLoginModal() {
  return { type: 'SHOW_LOGIN_MODAL' };
}

export function hideLoginModal() {
  return { type: 'HIDE_LOGIN_MODAL' };
}

export function syncProgress() {
  return (dispatch, getState) => {
    Database
      .syncQuestsProgress(getState().user.uid, getState().progress)
      .then((newProgress) => {
        dispatch(syncProgressSuccess(newProgress));
      });
  };
}

export function syncProgressSuccess(newProgress) {
  return { type: 'SYNC_PROGRESS_SUCCESS', newProgress };
}
