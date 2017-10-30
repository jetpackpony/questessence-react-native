import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import QuestContainer from '../components/QuestContainer';
import LoginModalContainer from '../components/LoginModalContainer';

class QuestScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  render() {
    return (
      <Container>
        <Content>
          <LoginModalContainer />
          <QuestContainer navigation={this.props.navigation} />
        </Content>
      </Container>
    );
  }
};

export default QuestScreen;
