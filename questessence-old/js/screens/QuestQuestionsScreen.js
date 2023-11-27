import React, { Component } from 'react';
import { Container } from 'native-base';
import QuestQuestionsContainer from '../components/QuestQuestionsContainer';
import ProgressBarContainer from '../components/ProgressBarContainer';

class QuestQuestionsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  render() {
    return (
      <Container>
        <QuestQuestionsContainer
          navigation={this.props.navigation}
        />
        <ProgressBarContainer
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
};

export default QuestQuestionsScreen;
