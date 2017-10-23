import I18n from '../locales/i18n';

export const isAnswerCorrect = (question, answer) => {
  return chooseTranslation(question.answer, getLocales()) === answer;
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

export const chooseTranslation = (text, locales) => {
  return text[locales.find(locale => text[locale])];
};

export const getLocales = () => {
  return I18n.locales.get();
};
