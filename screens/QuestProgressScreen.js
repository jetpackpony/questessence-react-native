import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';
import { connect } from 'react-redux';

import Question from '../components/Question';
import { QuestStates, QuestionStates } from '../actions/Actions';

const QUESTION_STATE = {
  UNANSWERED: 0, CORRECT: 1, INCORRECT: 2, SHOW_ANSWER: 3
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  const currentId = state.progress[id].currentQuestion;
  return {
    quest: state.entities.quests.byId[id],
    currentQuestion: state.entities.questions.byId[currentId],
    currentQuestionState: state.progress[id].currentQuestionState,
    progress: state.progress[id],
    completed: state.progress[id].questState === QuestStates.COMPLETED
  };
};

class QuestProgressScreen extends Component {
  constructor(props) {
    super(props);
    /*
    const quest = props.navigation.state.params.quest;
    this.state = {
      currentQuestionId: 0,
      questionStates: quest.questions.map((el) => ({
        id: el.id, state: QUESTION_STATE.UNANSWERED
      })),
      completed: false
    };
    */

    this.nextQuestion = this.nextQuestion.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  setQuestionToState(id, newState) {
    this.setState({
      questionStates: (
        this.state.questionStates.map((el) => (
          (el.id === id)
            ? { id: el.id, state: newState }
            : el
        ))
      )
    });
  }

  submitAnswer(answer) {
    // check this question answer
    const currentQuestion = this.props.navigation.state.params.quest.questions.find((el) =>
      (el.id === this.state.currentQuestionId)
    );
    const newState = (answer === currentQuestion.answer)
      ? QUESTION_STATE.CORRECT
      : QUESTION_STATE.INCORRECT;

    this.setQuestionToState(this.state.currentQuestionId, newState);
  }

  showAnswer() {
    this.setQuestionToState(this.state.currentQuestionId, QUESTION_STATE.SHOW_ANSWER);
  }

  static navigationOptions = {
    title: ({ state }) => state.params.title
  };

  nextQuestion() {
    const quest = this.props.navigation.state.params.quest;
    const id = this.state.currentQuestionId;
    if (id < quest.questions.length - 1) {
      this.setState({ currentQuestionId: id + 1 });
    } else {
      this.setState({ completed: true });
      console.log("this is a last question");
    }
  }

  render() {
    /*
    const { params } = this.props.navigation.state;
    const currentQuestion = params.quest.questions.find((el) =>
      (el.id === this.state.currentQuestionId)
    );
    const currentQuestionState = this.state.questionStates.find((el) =>
      (el.id === this.state.currentQuestionId)
    ).state;
    */
    return (
      <Container>
        <Content>
          {(this.props.completed)
              ? <View><Text>Ура! Вы прошли квест!</Text></View>
              : <Question
                question={this.props.currentQuestion}
                questionState={this.props.currentQuestionState}
                nextQuestion={this.nextQuestion}
                actionShowAnswer={this.showAnswer}
                actionSubmitAnswer={this.submitAnswer}
              />
          }
        </Content>
        <View style={styles.progressBar}>
          <Text>1/12</Text>
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  progressBar: {
    height: 30,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps)(QuestProgressScreen);
