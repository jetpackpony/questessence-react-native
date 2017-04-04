import types from './ActionTypes';

export function startQuest(questId) {
  return { type: types.START_QUEST, questId, updatingProgress: true };
};

export function answerQuestion(questId, questionId, answer) {
  return {
    type: types.ANSWER_QUESTION,
    questId,
    questionId,
    answer,
    updatingProgress: true
  };
};

export function showCorrectAnswer(questId) {
  return { type: types.SHOW_CORRECT_ANSWER, questId, updatingProgress: true  };
};

export function goToNextQuestion(questId) {
  return { type: types.GOTO_NEXT_QUESTION, questId, updatingProgress: true  };
};
