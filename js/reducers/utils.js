
export const isAnswerCorrect = (question, answer) => {
  return question.answer === answer;
};

export const isQuestComplete = (quest, newProgress) => {
  const questionNumber = quest.questionsInOrder.indexOf(newProgress.currentQuestion);
  return questionNumber >= quest.questionsInOrder.length - 1;
};

export const getNextQuestionId = (quest, newProgress) => {
  const questionNumber = quest.questionsInOrder.indexOf(newProgress.currentQuestion);
  if (!isQuestComplete(quest, newProgress)) {
    return quest.questionsInOrder[questionNumber + 1];
  } else {
    return null;
  }
};

export const getQuest = (state, questId) => {
  return state.entities.quests.byId[questId];
};
