import { downloadQuestions } from '../database/Database';
import types from './ActionTypes';
import { showLoginModal } from './Actions';

export function updateQuestList(quests) {
  return { type: types.UPDATE_QUEST_LIST, quests };
};

export function downloadQuest(questId) {
  return (dispatch) => {
    dispatch(downloadQuestStart(questId));

    downloadQuestions(questId).then((questions) => {
      dispatch(downloadQuestSuccess(questId, questions));
      dispatch(showLoginModal());
    });
  };
};

export function downloadQuestStart(questId) {
  return { type: types.DOWNLOADING_QUEST_START, questId };
}

export function downloadQuestSuccess(questId, questions) {
  return { type: types.DOWNLOADING_QUEST_SUCCESS, questId, questions };
}

export function deleteQuest(questId) {
  return { type: types.DELETE_QUEST, questId };
}

