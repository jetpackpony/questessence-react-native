import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';

import QuestImageWithTitle from '../components/QuestImageWithTitle';

export default class QuestScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.quest.title
  };
  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <View style={styles.coverContainer}>
            <QuestImageWithTitle
              img={params.quest.img}
              title={params.quest.title}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text>{params.quest.desc}</Text>
            <Button
              block
              success
              style={{ margin: 10 }}
              onPress={() => navigate('QuestProgress', { quest: params.quest })}
            >
              <Text>Начать</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  coverContainer: {
    flex: 1,
    height: 250
  },
  descriptionContainer: {
    padding: 10
  }
});
