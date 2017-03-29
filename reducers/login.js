export const login = (state, action) => {
  return {
    ...state,
    user: {
      isLoggedIn: true
    }
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
