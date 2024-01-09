import { connect } from "react-redux";
import Quest from "./Quest";

const mapStateToProps = (state, ownProps) => {
  const questId = ownProps.questId;
  const quest = state.entities.quests.byId[questId];
  return {
    quest,
  };
};

export default connect(mapStateToProps)(Quest);
