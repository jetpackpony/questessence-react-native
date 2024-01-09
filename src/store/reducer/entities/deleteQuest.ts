export default (state, action) => {
  let res = { ...state };
  delete res.questsDownloadStates[action.questId];
  delete res.questions.byId[action.questId];
  let ids = res.questions.allIds;
  let index = ids.indexOf(action.questId);
  res.questions.allIds = [...ids.slice(0, index), ...ids.slice(index + 1)];
  return res;
};
