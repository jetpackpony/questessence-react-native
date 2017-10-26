import R from 'ramda';
import { ActionTypes } from '../actions/Actions';
import { DownloadStates, QuestStates } from '../actions/Actions';

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

export default (state = initialEntities, action) => {
  switch(action.type) {
    case ActionTypes.DELETE_QUEST:
      let res = { ...state };
      delete res.questsDownloadStates[action.questId]
      delete res.questions.byId[action.questId]
      let ids = res.questions.allIds;
      let index = ids.indexOf(action.questId);
      res.questions.allIds = [
        ...ids.slice(0, index),
        ...ids.slice(index + 1)
      ];
      return res;
    case ActionTypes.DOWNLOADING_QUEST_START:
      return {
        ...state,
        questsDownloadStates: {
          [action.questId]: DownloadStates.DOWNLOADING
        }
      };
    case ActionTypes.DOWNLOADING_QUEST_SUCCESS:
      const byId = {
        ...state.questions.byId,
        ...action.questions
      };
      return {
        ...state,
        questions: {
          ...state.questions,
          byId,
          allIds: Object.keys(byId)
        },
        questsDownloadStates: {
          [action.questId]: DownloadStates.DOWNLOADED
        }
      };
    case ActionTypes.UPDATE_QUEST_LIST:
      return {
        ...state,
        quests: action.quests
      };
    default:
      return state;
  }
};
