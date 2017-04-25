import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';
import { connect } from 'react-redux';

import Question from '../components/Question';
import { QuestStates, QuestionStates } from '../actions/Actions';
import QuestComplete from '../components/QuestComplete';
import ProgressBar from '../components/ProgressBar';

import BoldBodyText from '../components/BoldBodyText';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  const currentId = state.progress[id].currentQuestion;
  const questionsInOrder = state.entities.quests.byId[id].questionsInOrder;
  const currentOrder = questionsInOrder.findIndex((el) => el === currentId) + 1;
  return {
    currentQuestion: state.entities.questions.byId[currentId],
    completed: state.progress[id].questState === QuestStates.COMPLETED,
    currentIndex: currentOrder,
    totalAmount: questionsInOrder.length
  };
};

class QuestProgressScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    return (
      <Container>
        {(this.props.completed)
            ? (
              <QuestComplete />
            )
            : (
              <Content keyboardShouldPersistTaps={'always'}>
                <Question question={this.props.currentQuestion} />
              </Content>
            )
        }
        <ProgressBar
          current={this.props.currentIndex}
          total={this.props.totalAmount}
        />
      </Container>
    );
  }
};

export default connect(mapStateToProps)(QuestProgressScreen);
