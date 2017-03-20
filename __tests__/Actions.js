import {
  startQuest,
  answerQuestion,
  showCorrectAnswer,
  goToNextQuestion
} from '../actions/Actions.js';

it('create a START_QUEST action', () => {
  expect(startQuest(0)).toMatchSnapshot();
});

it('create a ANSWER_QUESTION action', () => {
  expect(answerQuestion(0, 0, '8')).toMatchSnapshot();
});

it('create a SHOW_CORRECT_ANSWER action', () => {
  expect(showCorrectAnswer(0)).toMatchSnapshot();
});

it('create a GOTO_NEXT_QUESTION action', () => {
  expect(goToNextQuestion(0)).toMatchSnapshot();
});
