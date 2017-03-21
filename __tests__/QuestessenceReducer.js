import {
  QuestessenceReducer,
  initialState
} from '../reducers/QuestessenceReducer';
import {
  startQuest,
  answerQuestion,
  showCorrectAnswer,
  goToNextQuestion
} from '../actions/Actions.js';
import { QuestStates, QuestionStates } from '../actions/Actions';
import DummyData from './__helpers__/DummyData';

const DummyQuestProgress = () => {
  return {
    questState: QuestStates.IN_PROGRESS,
    currentQuestion: "question0",
    currentAnswer: '',
    currentQuestionState: QuestionStates.UNANSWERED
  };
};

it('starts a quest', () => {
  expect(
    QuestessenceReducer(DummyData(), startQuest("quest0"))
  ).toMatchSnapshot();
});

it('sets the question state if the answer is correct', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();
  state.entities.questions.byId["question0"].answer = "8";

  expect(
    QuestessenceReducer(state, answerQuestion("quest0", "question0", "8"))
  ).toMatchSnapshot();
});

it('sets the question state if the answer is incorrect', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();
  state.entities.questions.byId["question1"].answer = "24";

  expect(
    QuestessenceReducer(state, answerQuestion("quest0", "question1", "15"))
  ).toMatchSnapshot();
});

it('sets the question to show the correct answer', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();

  expect(
    QuestessenceReducer(state, showCorrectAnswer("quest0"))
  ).toMatchSnapshot();
});

it('jumps to the next question if there is one', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();

  expect(
    QuestessenceReducer(state, goToNextQuestion("quest0"))
  ).toMatchSnapshot();
});

it('sets the quest as complete if it is a last question', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();

  let questions = state.entities.quests.byId["quest0"].questionsInOrder;
  state.progress["quest0"].currentQuestion = questions[questions.length - 1];

  expect(
    QuestessenceReducer(state, goToNextQuestion("quest0"))
  ).toMatchSnapshot();
});
