import { connect } from 'react-redux';
import { chooseTranslation, getLocales } from '../reducers/utils';
import QuestList from './QuestList';

const mapStateToProps = (state, ownProps) => {
  const { navigate } = ownProps.navigation;
  const quests = state.entities.quests;
  return {
    quests: quests.allIds.map((el) => quests.byId[el]),
    getOnQuestPress: (quest) => () => navigate('Quest', {
      questId: quest.id,
      title: chooseTranslation(quest.title, getLocales())
    })
  };
};

export default connect(mapStateToProps)(QuestList);
