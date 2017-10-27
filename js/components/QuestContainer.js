import { connect } from 'react-redux';
import {
  startQuest, DownloadStates,
  downloadQuest, deleteQuest
} from '../actions/Actions';
import Quest from './Quest';
import I18n from '../locales/i18n';
import { chooseTranslation, getLocales } from '../reducers/utils';

const mapStateToProps = (state, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const quest = state.entities.quests.byId[questId];
  return {
    quest: {
      ...quest,
      localizedTitle: chooseTranslation(quest.title, getLocales()),
      localizedDesc: chooseTranslation(quest.desc, getLocales())
    },
    progress: state.progress[questId],
    downloaded: (state.entities.questsDownloadStates[questId] || DownloadStates.NOT_DOWNLOADED),
    deleteButtonText: I18n.t('deleteQuest')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const navigateToQuestions = () => {
    ownProps.navigation.navigate('QuestProgress', {
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
    onDelete: () => {
      dispatch(deleteQuest(questId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quest);

