import { QuestionStates, QuestStates } from '../../actions';
import { getQuest, isQuestComplete, getNextQuestionId } from '../../reducer';

export default (state, action, fullState) => {
  let quest = getQuest(fullState, action.questId);
  let newProgress = { ...state[quest.id] };
  if (isQuestComplete(quest, newProgress)) {
    newProgress.questState = QuestStates.COMPLETED;
  } else {
    newProgress.currentQuestion = getNextQuestionId(quest, newProgress);
    newProgress.currentQuestionState = QuestionStates.UNANSWERED
    newProgress.currentAnswer = "";
  }
  return {
    ...state,
    [quest.id]: newProgress,
    timestamp: action.timestamp
  };
};

