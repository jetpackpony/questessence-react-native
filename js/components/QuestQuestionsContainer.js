import { connect } from 'react-redux';
import { QuestStates } from '../actions/Actions';
import QuestQuestions from './QuestQuestions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  const currentId = state.progress[id].currentQuestion;
  return {
    currentQuestion: state.entities.questions.byId[currentId],
    completed: state.progress[id].questState
                                  === QuestStates.COMPLETED
  };
};

export default connect(mapStateToProps)(QuestQuestions);

