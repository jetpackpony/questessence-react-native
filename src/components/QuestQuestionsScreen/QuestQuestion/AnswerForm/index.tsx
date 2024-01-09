import { connect } from "react-redux";
import AnswerForm from "./AnswerForm";
import { QuestionStates } from "../../../../store/constants";
import { goToNextQuestion, showCorrectAnswer } from "../../../../store/actions";

const mapStateToProps = (state, ownProps) => {
  const questionState = state.progress[ownProps.questId].currentQuestionState;
  return {
    unanswered: questionState === QuestionStates.UNANSWERED,
    correct: questionState === QuestionStates.CORRECT,
    incorrect: questionState === QuestionStates.INCORRECT,
    showAnswer: questionState === QuestionStates.SHOW_ANSWER,
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
