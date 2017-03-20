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

const addDummyQuest = (inState) => {
  return {
    ...inState,
    questData: {
      ...inState.questData,
      quests: inState.questData.quests.concat({
        id: 0,
        title: 'Test',
        cover: 'http://...',
        desc: 'Description'
      }),
      questions: {
        ...inState.questData.questions,
        quest0: [{
          media: {
            type: 'image',
            uri: 'https://'
          },
          desc: 'На этом месте будет описание ',
          questionText: 'Сколько планет в солнечной системе?',
          answer: '8',
          answerDesc: 'Потому что Плутон больше не планета'
        },{
          media: {
            type: 'image',
            uri: 'https://'
          },
          desc: 'На этом месте будет описание вопроса',
          questionText: 'Сколько часов в сутках?',
          answer: '24',
          answerDesc: 'Хотелось бы больше, конечно'
        }]
      }
    },
    questProgress: {
      ...inState.questProgress,
      quest0: {
        questState: QuestStates.IN_PROGRESS,
        currentQuestion: 0,
        currentAnswer: '',
        currentQuestionState: QuestionStates.UNANSWERED
      }
    }
  };
};

it('starts a quest', () => {
  expect(
    QuestessenceReducer(initialState, startQuest(0))
  ).toMatchSnapshot();
});

it('sets the question state if the answer is correct', () => {
  let state = addDummyQuest(initialState);
  state.questData.questions.quest0[0].answer = '8';
  expect(
    QuestessenceReducer(state, answerQuestion(0, 0, '8'))
  ).toMatchSnapshot();
});

it('sets the question state if the answer is incorrect', () => {
  let state = addDummyQuest(initialState);
  state.questData.questions.quest0[1].answer = '24';
  expect(
    QuestessenceReducer(state, answerQuestion(0, 1, '15'))
  ).toMatchSnapshot();
});

it('sets the question to show the correct answer', () => {
  let state = addDummyQuest(initialState);
  expect(
    QuestessenceReducer(state, showCorrectAnswer(0))
  ).toMatchSnapshot();
});

it('jumps to the next question if there is one', () => {
  let state = addDummyQuest(initialState);
  expect(
    QuestessenceReducer(state, goToNextQuestion(0))
  ).toMatchSnapshot();
});

it('sets the quest as complete if it is a last question', () => {
  let state = addDummyQuest(initialState);
  state.questProgress.quest0.currentQuestion = state.questData.questions.quest0.length - 1;
  expect(
    QuestessenceReducer(state, goToNextQuestion(0))
  ).toMatchSnapshot();
});
