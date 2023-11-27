import { connect } from 'react-redux';
import AnswerFormInput from './AnswerFormInput';
import { answerQuestion } from '../actions';
import I18n from '../locales/i18n';

const mapStateToProps = (state) => ({
  enterAnswerHereText: I18n.t('answerEnterAnswer'),
  submitText: I18n.t('answerSubmit'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onActionSubmitAnswer: (answer) => {
    dispatch(answerQuestion(ownProps.questionId, answer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerFormInput);
