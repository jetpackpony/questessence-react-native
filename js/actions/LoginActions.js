import types from './ActionTypes';
import { AccessToken } from 'react-native-fbsdk';
import firebase from '../database/firebase';

import { syncProgress } from './SyncActions';

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
    AccessToken.getCurrentAccessToken()
      .then((userData) => {
        let token = userData.accessToken.toString();
        let credential = firebase.auth.FacebookAuthProvider.credential(token);
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
  return { type: types.LOGIN_START };
}

export function loginSuccess(user) {
  return { type: types.LOGIN_SUCCESS, user };
}

export function logoutSuccess() {
  return { type: types.LOGOUT };
}

export function showLoginModal() {
  return { type: types.SHOW_LOGIN_MODAL };
}

export function hideLoginModal() {
  return { type: types.HIDE_LOGIN_MODAL };
}
