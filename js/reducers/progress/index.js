import { ActionTypes } from '../../actions/Actions';

import startQuest from './startQuest';
import answerQuestion from './answerQuestion';
import showCorrectAnswer from './showCorrectAnswer';
import goToNextQuestion from './goToNextQuestion';
import downloadQuestSuccess from './downloadQuestSuccess';
import syncProgressSuccess from './syncProgressSuccess';
import deleteQuest from './deleteQuest';

const initialProgress = {};

export default (state = initialProgress, action, fullState) => {
  const reducers = {
    [ActionTypes.START_QUEST]: startQuest,
    [ActionTypes.ANSWER_QUESTION]: answerQuestion,
    [ActionTypes.SHOW_CORRECT_ANSWER]: showCorrectAnswer,
    [ActionTypes.GOTO_NEXT_QUESTION]: goToNextQuestion,
    [ActionTypes.DOWNLOADING_QUEST_SUCCESS]: downloadQuestSuccess,
    [ActionTypes.SYNC_PROGRESS_SUCCESS]: syncProgressSuccess,
    [ActionTypes.DELETE_QUEST]: deleteQuest
  };

  if (reducers[action.type]) {
    return reducers[action.type](state, action, fullState);
  } else {
    return state;
  }
};

