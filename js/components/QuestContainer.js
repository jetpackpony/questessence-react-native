import { connect } from 'react-redux';
import Quest from './Quest';
import { chooseTranslation, getLocales } from '../reducer/utils';

const mapStateToProps = (state, ownProps) => {
  const questId = ownProps.navigation.state.params.questId;
  const quest = state.entities.quests.byId[questId];
  return {
    quest: {
      ...quest,
      localizedTitle: chooseTranslation(quest.title, getLocales()),
      localizedDesc: chooseTranslation(quest.desc, getLocales())
    }
  };
};

export default connect(mapStateToProps)(Quest);

