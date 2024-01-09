export default (state, action) => {
  return {
    ...state,
    quests: action.quests,
  };
};
