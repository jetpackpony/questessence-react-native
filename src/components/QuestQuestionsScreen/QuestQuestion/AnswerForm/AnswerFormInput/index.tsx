import { connect } from "react-redux";
import AnswerFormInput from "./AnswerFormInput";
import { answerQuestion } from "../../../../../store/actions";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onActionSubmitAnswer: (answer) => {
    dispatch(answerQuestion(ownProps.questionId, answer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerFormInput);
