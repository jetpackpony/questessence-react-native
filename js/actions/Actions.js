import types from './ActionTypes';

export const ActionTypes = types;

export {
  QuestStates, DownloadStates, QuestionStates
} from './constants';

export {
  startQuest, answerQuestion,
  showCorrectAnswer, goToNextQuestion
} from './QuestProgressActions';

export {
  downloadQuest, downloadQuestStart,
  downloadQuestSuccess, updateQuestList
} from './DownloadActions';

export {
  loginFacebook, loginFirebaseFacebook,
  restoreLogin, logout,
  loginStart, loginSuccess,
  logoutSuccess, showLoginModal,
  hideLoginModal
} from './LoginActions';

export {
  syncProgress, syncProgressSuccess
} from './SyncActions';



export function deleteQuest(questId) {
  return { type: ActionTypes.DELETE_QUEST, questId, updatingProgress: true };
}

