import { connect } from 'react-redux';
import { chooseTranslation, getLocales } from '../reducers/utils';
import QuestList from './QuestList';

const mapStateToProps = (state, ownProps) => {
  const { navigate } = ownProps.navigation;
  const quests = state.entities.quests;
  return {
    quests: quests.allIds.map((id) => ({
      ...quests.byId[id],
      localizedTitle: chooseTranslation(quests.byId[id].title, getLocales())
    })),
    getOnQuestPress: (quest) => () => navigate('Quest', {
      questId: quest.id,
      title: chooseTranslation(quest.title, getLocales())
    })
  };
};

export default connect(mapStateToProps)(QuestList);
