import { connect } from "react-redux";
import {
  startQuest,
  downloadQuest,
  deleteQuest,
  restartQuest,
} from "../../../../store/actions";
import { DownloadStates } from "../../../../store/constants";
import QuestButtons from "./QuestButtons";
import { chooseTranslation } from "../../../../i18n";

const mapStateToProps = (state, ownProps) => {
  const questId = ownProps.quest.id;
  return {
    progress: state.progress[questId],
    downloaded:
      state.entities.questsDownloadStates[questId] ||
      DownloadStates.NOT_DOWNLOADED,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questId = ownProps.quest.id;
  const navigateToQuestions = () => {
    ownProps.navigation.navigate("QuestQuestions", {
      questId,
      title: chooseTranslation(ownProps.quest.title),
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestButtons);
