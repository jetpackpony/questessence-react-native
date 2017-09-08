export default (state, action) => {
  let res = { ...state };
  delete res.progress[action.questId]
  delete res.downloadedQuests[action.questId]
  return res;
};
