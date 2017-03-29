import { QuestStates, QuestionStates } from '../actions/Actions';
import { getQuest, isQuestComplete, getNextQuestionId } from './utils';

export default (state, action) => {
  let quest = getQuest(state, action.questId);
  let newProgress = { ...state.progress[quest.id] };
  if (isQuestComplete(quest, newProgress)) {
    newProgress.questState = QuestStates.COMPLETED;
  } else {
    newProgress.currentQuestion = getNextQuestionId(quest, newProgress);
    newProgress.currentQuestionState = QuestionStates.UNANSWERED
    newProgress.currentAnswer = "";
  }
  return {
    ...state,
    progress: {
      ...state.progress,
      [quest.id]: newProgress
    }
  };
};
