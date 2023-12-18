import entities, * as entitiesSelectors from "./entities";
import progress from "./progress";
import user from "./user";
import UIState from "./UIState";

const initialState = {
  entities: {
    quests: {
      byId: {},
      allIds: [],
    },
    questions: {
      byId: {},
      allIds: [],
    },
    questsDownloadStates: {},
  },
  progress: {},
  user: {
    isLoggedIn: false,
    uid: null,
  },
  UIState: {
    isLoginModalShown: false,
    isLoggingInSpinnerShown: false,
  },
};

export default (state = initialState, action) => {
  return {
    entities: entities(state.entities, action),
    progress: progress(state.progress, action, state),
    user: user(state.user, action),
    UIState: UIState(state.UIState, action, state),
  };
};

export const dontHydrateKeys = ["UIState"];

export const getQuestionIndex = (state, questId, questionId) => {
  return entitiesSelectors.getQuestionIndex(
    state.entities,
    questId,
    questionId,
  );
};

export const getQuest = (state, questId) => {
  return entitiesSelectors.getQuest(state.entities, questId);
};

export const isQuestComplete = (quest, newProgress) => {
  return entitiesSelectors.isQuestComplete(quest, newProgress);
};

export const getNextQuestionId = (quest, newProgress) => {
  return entitiesSelectors.getNextQuestionId(quest, newProgress);
};

export const isAnswerCorrect = (question, answer) => {
  return entitiesSelectors.isAnswerCorrect(question, answer);
};
