import { QuestionStates, QuestStates } from "../../constants";
import { getQuest } from "../../reducer";

export default (state, action, fullState) => {
  return {
    ...state,
    [action.questId]: {
      ...state[action.questId],
      questState: QuestStates.IN_PROGRESS,
      currentQuestion: getQuest(fullState, action.questId).questionsInOrder[0],
      currentAnswer: "",
      currentQuestionState: QuestionStates.UNANSWERED,
    },
    timestamp: action.timestamp,
  };
};
