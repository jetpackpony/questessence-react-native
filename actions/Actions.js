export const QuestStates = {
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

export function showCorrectAnswer(questId, questionId) {
  return { type: 'SHOW_CORRECT_ANSWER', questId, questionId };
};

export function goToNextQuestion(questId) {
  return { type: 'GOTO_NEXT_QUESTION', questId };
};
