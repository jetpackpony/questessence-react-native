/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Content, Body, Left, Right } from 'native-base';

export default class QuestEssence extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Санкт-Петербург</Title>
          </Body>
        </Header>
        <Content padder>
          <Text>Content here</Text>
        </Content>
      </Container>
    );
  }
}


AppRegistry.registerComponent('QuestEssence', () => QuestEssence);
