import { QuestStates } from '../../actions/Actions';

export default (state, action) => {
  return {
    ...state,
    [action.questId]: {
      questState: QuestStates.NOT_STARTED
    },
    timestamp: action.timestamp
  };
};

