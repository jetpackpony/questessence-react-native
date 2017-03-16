import reducer from '../reducers/QuestessenceReducer';
import { startQuest } from '../actions/Actions.js';
import { QuestStates, QuestionStates } from '../actions/Actions';

it('it starts the quest', () => {
  let { questProgress } = reducer(undefined, startQuest(0));
  expect(questProgress.quest0).toBe({
    questState: QuestStates.IN_PROGRESS,
    currentQuestion: 0,
    currentAnswer: '',
    currentQuestionState: QuestionStates.UNANSWERED
  });
});
