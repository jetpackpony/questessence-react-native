import { QuestessenceReducer } from '../reducers/QuestessenceReducer';
import {
  startQuest, answerQuestion,
  showCorrectAnswer, goToNextQuestion,
  updateQuestList, deleteQuest,
  purchaseQuestSuccess, downloadQuestStart,
  downloadQuestSuccess
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

it('processes START_QUEST action', () => {
  expect(
    QuestessenceReducer(DummyData(), startQuest("quest0"))
  ).toMatchSnapshot();
});

it('processes ANSWER_QUESTION action with correct answer', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();
  state.entities.questions.byId["question0"].answer = "8";

  expect(
    QuestessenceReducer(state, answerQuestion("quest0", "question0", "8"))
  ).toMatchSnapshot();
});

it('processes ANSWER_QUESTION action with incorrect answer', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();
  state.entities.questions.byId["question1"].answer = "24";

  expect(
    QuestessenceReducer(state, answerQuestion("quest0", "question1", "15"))
  ).toMatchSnapshot();
});

it('processes SHOW_CORRECT_ANSWER action', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();

  expect(
    QuestessenceReducer(state, showCorrectAnswer("quest0"))
  ).toMatchSnapshot();
});

it('processes GOTO_NEXT_QUESTION action when there is a next question', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();

  expect(
    QuestessenceReducer(state, goToNextQuestion("quest0"))
  ).toMatchSnapshot();
});

it('processes GOTO_NEXT_QUESTION action when it is the last question', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();

  let questions = state.entities.quests.byId["quest0"].questionsInOrder;
  state.progress["quest0"].currentQuestion = questions[questions.length - 1];

  expect(
    QuestessenceReducer(state, goToNextQuestion("quest0"))
  ).toMatchSnapshot();
});

it('processes UPDATE_QUEST_LIST action', () => {
  let state = DummyData();
  let newQuests = {
    ...state.entities.quests,
    byId: {
      ...state.entities.quests.byId,
      "quest333": {
        "id": "quest333"
      }
    },
    allIds: [
      ...state.entities.quests.allIds,
      "quest333"
    ]
  };
  expect(
    QuestessenceReducer(state, updateQuestList(newQuests))
  ).toMatchSnapshot();
});

it('processes DELETE_QUEST action', () => {
  let state = DummyData();
  state.progress["quest0"] = DummyQuestProgress();

  expect(
    QuestessenceReducer(state, deleteQuest("quest0"))
  ).toMatchSnapshot();
});

it('processes PURCHASE_QUEST_SUCCESS action', () => {
  expect(
    QuestessenceReducer(DummyData(), purchaseQuestSuccess("quest0", "test_quest_0"))
  ).toMatchSnapshot();
});

it('processes DOWNLOADING_QUEST_START action', () => {
  expect(
    QuestessenceReducer(DummyData(), downloadQuestStart("quest0"))
  ).toMatchSnapshot();
});

it('processes DOWNLOADING_QUEST_SUCCESS action', () => {
  let state = DummyData();
  let questions = state.entities.questions.byId;
  state.entities.questions = {
    byId: {  },
    allIds: []
  };

  expect(
    QuestessenceReducer(state, downloadQuestSuccess("quest0", questions))
  ).toMatchSnapshot();
});
