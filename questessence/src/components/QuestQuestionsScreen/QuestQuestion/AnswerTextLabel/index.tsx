import { connect } from "react-redux";
import AnswerTextLabels from "./AnswerTextLabels";
import { QuestionStates } from "../../../../store/constants";

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions.byId[ownProps.questionId];
  const questionState = state.progress[question.quest].currentQuestionState;
  return {
    question,
    correct: questionState === QuestionStates.CORRECT,
    incorrect: questionState === QuestionStates.INCORRECT,
    showAnswer: questionState === QuestionStates.SHOW_ANSWER,
  };
};

export default connect(mapStateToProps)(AnswerTextLabels);
