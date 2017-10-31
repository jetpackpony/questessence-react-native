import { connect } from 'react-redux';
import AnswerTextLabels from './AnswerTextLabels';
import {
  answerQuestion, showCorrectAnswer,
  goToNextQuestion, QuestionStates
} from '../actions';
import I18n from '../locales/i18n';
import { chooseTranslation, getLocales } from '../reducer/utils';

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions.byId[ownProps.questionId];
  const questionState = state.progress[question.quest].currentQuestionState;
  return {
    question: {
      ...question,
      localizedAnswerDesc: chooseTranslation(question.answerDesc, getLocales()),
      localizedAnswer: chooseTranslation(question.answer, getLocales())
    },
    answerCorrectText: I18n.t('answerCorrect'),
    answerIncorrectText: I18n.t('answerIncorrect'),
    tryAgainText: I18n.t('answerTryAgain'),
    correctAnswerIsText: I18n.t('answerCorrectAnswer'),
    correct: questionState === QuestionStates.CORRECT,
    incorrect: questionState === QuestionStates.INCORRECT,
    showAnswer: questionState === QuestionStates.SHOW_ANSWER
  };
};

export default connect(mapStateToProps)(AnswerTextLabels);
