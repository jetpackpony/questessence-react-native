import { QuestStates, QuestionStates } from '../actions/Actions';

const initialState = {
  questData: {
    quests: [],
    questions: {}
  },
  questProgress: {}
};

export default function QuestessenceReducer(state = initialState, action) {
  /*
  switch (action.type) {
    case 'START_QUEST':
      return {
        ...state,
        questProgress: {
          ...state.questProgress,
          [`quest${action.questId}`]: {
            ...state.questProgress[`quest${action.questId}`],

          }
        }
      }
  }
  */
  return state;
};
