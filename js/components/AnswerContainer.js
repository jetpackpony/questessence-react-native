import { connect } from 'react-redux';
import Answer from './Answer';
import {
  answerQuestion, showCorrectAnswer, goToNextQuestion
} from '../actions/Actions';
import I18n from '../locales/i18n';
import { chooseTranslation, getLocales } from '../reducers/utils';

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions.byId[ownProps.questionId];
  return {
    question: {
      ...question,
      localizedAnswerDesc: chooseTranslation(question.answerDesc, getLocales()),
      localizedAnswer: chooseTranslation(question.answer, getLocales())
    },
    questionState: state.progress[question.quest].currentQuestionState,
    answerCorrectText: I18n.t('answerCorrect'),
    answerIncorrectText: I18n.t('answerIncorrect'),
    tryAgainText: I18n.t('answerTryAgain'),
    correctAnswerIsText: I18n.t('answerCorrectAnswer'),
    enterAnswerHereText: I18n.t('answerEnterAnswer'),
    submitText: I18n.t('answerSubmit'),
    nextQuestionText: I18n.t('answerNextQuestion'),
    revealAnswerText: I18n.t('answerRevealAnswer')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questionId = ownProps.questionId;
  const questId = ownProps.questId;
  return {
    onActionSubmitAnswer: (answer) => {
      dispatch(answerQuestion(questionId, answer));
    },
    onActionShowAnswer: () => {
      dispatch(showCorrectAnswer(questId));
    },
    onNextQuestion: () => {
      dispatch(goToNextQuestion(questId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
