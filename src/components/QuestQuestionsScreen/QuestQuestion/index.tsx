import { connect } from "react-redux";
import QuestQuestions from "./QuestQuestions";
import { QuestStates } from "../../../store/constants";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.questId;
  const currentId = state.progress[id].currentQuestion;
  const currentQuestion = state.entities.questions.byId[currentId];
  return {
    currentQuestion,
    completed: state.progress[id].questState === QuestStates.COMPLETED,
  };
};

export default connect(mapStateToProps)(QuestQuestions);
