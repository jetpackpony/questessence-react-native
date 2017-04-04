export default (state, action) => {
  let res = { ...state };
  delete res.progress[action.questId]
  return res;
};
