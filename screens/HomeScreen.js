import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Container, Content,
} from 'native-base';

import QuestCard from '../components/QuestCard';
import quests from './__Quests';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    const cards = quests.map((quest, i) => {
      return (
        <QuestCard
          key={i}
          quest={quest}
          onPress={() => navigate('Quest', { quest })}
        />
      );
    });
    return (
      <Container>
        <Content padder>
          {cards}
        </Content>
      </Container>
    );
  }
}
