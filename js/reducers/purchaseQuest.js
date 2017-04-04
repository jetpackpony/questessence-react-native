import { QuestStates } from '../actions/Actions';

export const purchaseQuestSuccess = (state, action) => {
  return {
    ...state,
    progress: {
      ...state.progress,
      [action.questId]: {
        questState: QuestStates.NOT_STARTED
      }
    },
    isPurchasingSpinnerShown: false
  };
};

export const purchaseQuestStart = (state, action) => {
  return {
    ...state,
    isPurchasingSpinnerShown: true
  };
};
