import { connect } from "react-redux";
import QuestList from "./QuestList";
import { chooseTranslation } from "../../../i18n";

const mapStateToProps = (state, { navigate }) => {
  const stateQuests = state.entities.quests;
  const quests = stateQuests.allIds.map((id) => stateQuests.byId[id]);

  return {
    quests,
    getOnQuestPress: (quest) => () =>
      navigate("Quest", {
        questId: quest.id,
        title: chooseTranslation(quest.title),
      }),
  };
};

export default connect(mapStateToProps)(QuestList);
