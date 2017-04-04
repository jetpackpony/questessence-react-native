import { QuestionStates, QuestStates } from '../actions/Actions';
import { getQuest } from './utils';

export default (state, action) => {
  return {
    ...state,
    progress: {
      ...state.progress,
      [action.questId]: {
        ...state.progress[action.questId],
        questState: QuestStates.IN_PROGRESS,
        currentQuestion: getQuest(state, action.questId).questionsInOrder[0],
        currentAnswer: "",
        currentQuestionState: QuestionStates.UNANSWERED
      }
    }
  };
};
