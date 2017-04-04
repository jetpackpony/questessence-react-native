import Database from '../database/Database';
import types from './ActionTypes';

export function updateQuestList(quests) {
  return { type: types.UPDATE_QUEST_LIST, quests };
};

export function downloadQuest(questId) {
  return (dispatch) => {
    dispatch(downloadQuestStart(questId));

    Database
      .downloadQuestions(questId)
      .then((questions) => {
        dispatch(downloadQuestSuccess(questId, questions));
      });
  };
};

export function downloadQuestStart(questId) {
  return { type: types.DOWNLOADING_QUEST_START, questId };
}

export function downloadQuestSuccess(questId, questions) {
  return { type: types.DOWNLOADING_QUEST_SUCCESS, questId, questions, updatingProgress: true  };
}

