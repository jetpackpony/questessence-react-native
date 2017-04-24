import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';
import { connect } from 'react-redux';

import Question from '../components/Question';
import { QuestStates, QuestionStates } from '../actions/Actions';
import QuestComplete from '../components/QuestComplete';

import BoldBodyText from '../components/BoldBodyText';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.state.params.questId;
  const currentId = state.progress[id].currentQuestion;
  return {
    currentQuestion: state.entities.questions.byId[currentId],
    completed: state.progress[id].questState === QuestStates.COMPLETED
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
              <Content>
                <Question question={this.props.currentQuestion} />
              </Content>
            )
        }
        <View style={styles.progressBar}>
          <BoldBodyText>1/12</BoldBodyText>
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
