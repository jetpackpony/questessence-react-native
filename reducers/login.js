export const loginSuccess = (state, action) => {
  return {
    ...state,
    user: {
      isLoggedIn: true
    },
    isLoginModalShown: false,
    isLoggingInSpinnerShown: false
  };
};

export const loginStart = (state, action) => {
  return {
    ...state,
    isLoggingInSpinnerShown: true
  };
};

export const logout = (state, action) => {
  return {
    ...state,
    user: {
      isLoggedIn: false
    }
  };
};

export const showLoginModal = (state, action) => {
  return {
    ...state,
    isLoginModalShown: !state.user.isLoggedIn
  };
};

export const hideLoginModal = (state, action) => {
  return {
    ...state,
    isLoginModalShown: false
  };
};
