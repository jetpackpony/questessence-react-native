import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import I18n from '../locales/i18n';
import { getQuestionIndex } from '../reducer';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  const currentId = state.progress[id].currentQuestion;
  return {
    current: getQuestionIndex(state, id, currentId) + 1,
    total: state.entities.quests.byId[id].questionsInOrder.length,
    outOfText: I18n.t('progressBarOutOf')
  };
};

export default connect(mapStateToProps)(ProgressBar);
