export default (state, action) => {
  let res = {
    ...state,
    timestamp: action.timestamp
  };
  delete res[action.questId];
  return res;
};

