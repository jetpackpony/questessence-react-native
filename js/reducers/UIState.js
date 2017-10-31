import { ActionTypes } from '../actions';

const initialUIState = {
  isLoginModalShown: false,
  isLoggingInSpinnerShown: false
};

export default (state = initialUIState, action, fullState) => {
  switch(action.type) {
    case ActionTypes.LOGIN_START:
      return {
        ...state,
        isLoggingInSpinnerShown: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoginModalShown: false,
        isLoggingInSpinnerShown: false
      };
    case ActionTypes.SHOW_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalShown: !fullState.user.isLoggedIn
      };
    case ActionTypes.HIDE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalShown: false
      };
    default:
      return state;
  }
};
