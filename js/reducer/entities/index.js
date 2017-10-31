import R from 'ramda';
import { ActionTypes } from '../../actions';
import { DownloadStates, QuestStates } from '../../actions';

import deleteQuest from './deleteQuest';
import downloadingQuestStart from './downloadingQuestStart';
import downloadingQuestSuccess from './downloadingQuestSuccess';
import updateQuestList from './updateQuestList';

const initialEntities = {
  quests: {
    byId: { },
    allIds: [ ]
  },
  questions: {
    byId: { },
    allIds: [ ]
  },
  questsDownloadStates: {},
};

export default (state = initialProgress, action) => {
  const reducers = {
    [ActionTypes.DELETE_QUEST]: deleteQuest,
    [ActionTypes.DOWNLOADING_QUEST_START]: downloadingQuestStart,
    [ActionTypes.DOWNLOADING_QUEST_SUCCESS]: downloadingQuestSuccess,
    [ActionTypes.UPDATE_QUEST_LIST]: updateQuestList
  };

  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  } else {
    return state;
  }
};

export const getQuestionIndex = (state, questId, questionId) => {
  return state.quests.byId[questId].questionsInOrder
    .findIndex((el) => el === questionId);
};
