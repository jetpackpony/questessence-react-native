import { connect } from 'react-redux';
import AnswerForm from './AnswerForm';
import {
  answerQuestion, showCorrectAnswer,
  goToNextQuestion, QuestionStates
} from '../actions/Actions';
import I18n from '../locales/i18n';

const mapStateToProps = (state, ownProps) => {
  const questionState = state.progress[ownProps.questId].currentQuestionState;
  return {
    enterAnswerHereText: I18n.t('answerEnterAnswer'),
    submitText: I18n.t('answerSubmit'),
    nextQuestionText: I18n.t('answerNextQuestion'),
    revealAnswerText: I18n.t('answerRevealAnswer'),
    unanswered: questionState === QuestionStates.UNANSWERED,
    correct: questionState === QuestionStates.CORRECT,
    incorrect: questionState === QuestionStates.INCORRECT,
    showAnswer: questionState === QuestionStates.SHOW_ANSWER
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
