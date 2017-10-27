import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import I18n from '../locales/i18n';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  const currentId = state.progress[id].currentQuestion;
  const questionsInOrder =
                state.entities.quests.byId[id].questionsInOrder;
  return {
    currentIndex: questionsInOrder.findIndex(
                          (el) => el === currentId) + 1,
    totalAmount: questionsInOrder.length,
    outOfText: I18n.t('progressBarOutOf')
  };
};

export default connect(mapStateToProps)(ProgressBar);
