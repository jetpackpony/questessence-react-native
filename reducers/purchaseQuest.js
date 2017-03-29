import { QuestStates } from '../actions/Actions';

export const purchaseQuestSuccess = (state, action) => {
  return {
    ...state,
    progress: {
      ...state.progress,
      [action.questId]: {
        questState: QuestStates.PURCHASED
      }
    }
  };
};
