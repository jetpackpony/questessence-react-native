import Database from '../database/Database';
import PurchaseAPI from '../purchaseApi/PurchaseAPI';
import { useDummyGoogleProductID } from '../config';

import { AccessToken } from 'react-native-fbsdk';
import firebase from '../database/firebase';

export const QuestStates = {
  PURCHASED: 'PURCHASED',
  DOWNLOADING: 'DOWNLOADING',
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export const QuestionStates = {
  UNANSWERED: 'UNANSWERED',
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  SHOW_ANSWER: 'SHOW_ANSWER'
};

export function startQuest(questId) {
  return { type: 'START_QUEST', questId };
};

export function answerQuestion(questId, questionId, answer) {
  return { type: 'ANSWER_QUESTION', questId, questionId, answer };
};

export function showCorrectAnswer(questId) {
  return { type: 'SHOW_CORRECT_ANSWER', questId };
};

export function goToNextQuestion(questId) {
  return { type: 'GOTO_NEXT_QUESTION', questId };
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
        return PurchaseAPI.consume(productId);
      })
      .then(() => {
        dispatch(purchaseQuestSuccess(questId, productId));
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
  return { type: 'PURCHASE_QUEST_SUCCESS', questId, productId };
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
  return { type: 'DOWNLOADING_QUEST_SUCCESS', questId, questions };
}

export function deleteQuest(questId) {
  return { type: 'DELETE_QUEST', questId };
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
            dispatch(loginSuccess());
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

export function loginSuccess() {
  return { type: 'LOGIN' };
}

export function logoutSuccess() {
  return { type: 'LOGOUT' };
}
