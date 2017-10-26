export default (state, action) => {
  let res = { ...state };
  delete res.progress[action.questId]
  delete res.questsDownloadStates[action.questId]
  return res;
};
