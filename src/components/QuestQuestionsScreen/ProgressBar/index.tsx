import { connect } from "react-redux";
import ProgressBar from "./ProgressBar";
import { getQuestionIndex } from "../../../store/reducer";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.questId;
  const currentId = state.progress[id].currentQuestion;
  return {
    current: getQuestionIndex(state, id, currentId) + 1,
    total: state.entities.quests.byId[id].questionsInOrder.length,
  };
};

export default connect(mapStateToProps)(ProgressBar);
