import { ActionTypes } from '../actions';

const initialUser = {
  isLoggedIn: false,
  uid: null
};

export default (state = initialUser, action) => {
  switch(action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        uid: action.user.uid
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        uid: null
      };
    default:
      return state;
  }
};
