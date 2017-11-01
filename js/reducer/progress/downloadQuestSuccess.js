import { QuestStates } from '../../actions';

export default (state, action) => {
  return {
    ...state,
    [action.questId]: state[action.questId] || {
      questId: action.questId,
      questState: QuestStates.NOT_STARTED
    }
  };
};
