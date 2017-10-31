import { connect } from 'react-redux';
import { QuestStates } from '../actions';
import QuestQuestions from './QuestQuestions';
import { chooseTranslation, getLocales } from '../reducer/utils';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  const currentId = state.progress[id].currentQuestion;
  const currQuestion = state.entities.questions.byId[currentId];
  return {
    currentQuestion: {
      ...currQuestion,
      localizedQuestionText: chooseTranslation(
        currQuestion.questionText,
        getLocales()
      ),
      localizedDesc: chooseTranslation(
        currQuestion.desc,
        getLocales()
      )

    },
    completed: state.progress[id].questState
                                  === QuestStates.COMPLETED
  };
};

export default connect(mapStateToProps)(QuestQuestions);

