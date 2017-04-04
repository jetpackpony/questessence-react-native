export default (state, action) => {
  return {
    ...state,
    entities: {
      ...state.entities,
      quests: action.quests
    }
  };
};
