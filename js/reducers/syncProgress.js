export const syncProgressSuccess = (state, action) => {
  return {
    ...state,
    progress: action.newProgress
  };
};
