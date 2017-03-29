import { QuestStates, QuestionStates } from '../actions/Actions';

import deleteQuest from './deleteQuest';
import { purchaseQuestSuccess } from './purchaseQuest';
import { downloadQuestStart, downloadQuestSuccess } from './downloadQuest';
import startQuest from './startQuest';
import answerQuestion from './answerQuestion';
import showCorrectAnswer from './showCorrectAnswer';
import goToNextQuestion from './goToNextQuestion';
import updateQuestList from './updateQuestList';
import { login, logout } from './login';

const initialState = {
  entities: {
    "quests": {
      "byId": { },
      "allIds": [ ]
    },
    "questions": {
      "byId": { },
      "allIds": [ ]
    }
  },
  progress: {}
};

export function QuestessenceReducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_QUEST': return deleteQuest(state, action);
    case 'PURCHASE_QUEST_SUCCESS': return purchaseQuestSuccess(state, action);
    case 'DOWNLOADING_QUEST_START': return downloadQuestStart(state, action);
    case 'DOWNLOADING_QUEST_SUCCESS': return downloadQuestSuccess(state, action);
    case 'START_QUEST': return startQuest(state, action);
    case 'ANSWER_QUESTION': return answerQuestion(state, action);
    case 'SHOW_CORRECT_ANSWER': return showCorrectAnswer(state, action);
    case 'GOTO_NEXT_QUESTION': return goToNextQuestion(state, action);
    case 'UPDATE_QUEST_LIST': return updateQuestList(state, action);
    case 'LOGIN': return login(state, action);
    case 'LOGOUT': return logout(state, action);
    default: return state;
  }
};
