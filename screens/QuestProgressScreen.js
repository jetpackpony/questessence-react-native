import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

import Question from '../components/Question';

export default class QuestProgressScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.quest.title
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <Question question={{ imgUri: params.quest.img }} />
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
