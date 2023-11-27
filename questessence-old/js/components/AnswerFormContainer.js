import { connect } from 'react-redux';
import AnswerForm from './AnswerForm';
import { showCorrectAnswer, goToNextQuestion } from '../actions';
import { QuestionStates } from '../constants';
import I18n from '../locales/i18n';

const mapStateToProps = (state, ownProps) => {
  const questionState = state.progress[ownProps.questId].currentQuestionState;
  return {
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
    onActionShowAnswer: () => {
      dispatch(showCorrectAnswer(questId));
    },
    onNextQuestion: () => {
      dispatch(goToNextQuestion(questId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
