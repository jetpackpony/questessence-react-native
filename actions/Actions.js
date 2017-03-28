import Database from '../database/Database';
import PurchaseAPI from '../purchaseApi/PurchaseAPI';
import Config from 'react-native-config';

export const QuestStates = {
  PURCHASED: 'PURCHASED',
  DOWNLOADING: 'DOWNLOADING',
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export const QuestionStates = {
  UNANSWERED: 'UNANSWERED',
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  SHOW_ANSWER: 'SHOW_ANSWER'
};

export function startQuest(questId) {
  return { type: 'START_QUEST', questId };
};

export function answerQuestion(questId, questionId, answer) {
  return { type: 'ANSWER_QUESTION', questId, questionId, answer };
};

export function showCorrectAnswer(questId) {
  return { type: 'SHOW_CORRECT_ANSWER', questId };
};

export function goToNextQuestion(questId) {
  return { type: 'GOTO_NEXT_QUESTION', questId };
};

export function updateQuestList(quests) {
  return { type: 'UPDATE_QUEST_LIST', quests };
};

export function purchaseQuest(questId, productId) {
  return (dispatch) => {
    dispatch({ type: 'PURCHASE_QUEST_START', questId, productId });

    if (Config.USE_DUMMY_GOOGLE_PLAY_PODUCTS === "true") {
      productId = "android.test.purchased";
    }
    PurchaseAPI.purchase(productId)
      .then((res) => {
        console.log('You purchased: ', res);
        return PurchaseAPI.consume(productId);
      })
      .then(() => {
        dispatch({ type: 'PURCHASE_QUEST_SUCCESS', questId, productId });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function downloadQuest(questId) {
  return (dispatch) => {
    dispatch({ type: 'DOWNLOADING_QUEST_START', questId });

    Database
      .downloadQuestions(questId)
      .then((questions) => {
        dispatch({ type: 'DOWNLOADING_QUEST_SUCCESS', questId, questions });
      });
  };
};

export function deleteQuest(questId) {
  return { type: 'DELETE_QUEST', questId };
}
