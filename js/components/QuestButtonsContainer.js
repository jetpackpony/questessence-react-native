import { connect } from 'react-redux';
import {
  startQuest, downloadQuest,
  deleteQuest, restartQuest
} from '../actions';
import { DownloadStates } from '../constants';
import QuestButtons from './QuestButtons';
import I18n from '../locales/i18n';

const mapStateToProps = (state, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const quest = state.entities.quests.byId[questId];
  return {
    progress: state.progress[questId],
    downloaded: (state.entities.questsDownloadStates[questId]
                  || DownloadStates.NOT_DOWNLOADED),
    downloadButtonText: I18n.t('download'),
    downloadingButtonText: I18n.t('downloading'),
    startButtonText: I18n.t('start'),
    continueButtonText: I18n.t('continue'),
    restartButtonText: I18n.t('restart'),
    deleteButtonText: I18n.t('deleteQuest')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const navigateToQuestions = () => {
    ownProps.navigation.navigate('QuestQuestions', {
      questId,
      title: ownProps.navigation.state.params.title
    });
  };
  return {
    onStartClick: () => {
      dispatch(startQuest(questId));
      navigateToQuestions();
    },
    onContinueClick: navigateToQuestions,
    onDownloadClick: () => {
      dispatch(downloadQuest(questId));
    },
    onDeleteClick: () => {
      dispatch(deleteQuest(questId));
    },
    onRestartClick: () => {
      dispatch(restartQuest(questId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestButtons);

