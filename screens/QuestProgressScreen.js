import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

import QuestionMedia from '../components/QuestionMedia';

export default class QuestProgressScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.quest.title
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <View style={styles.mediaContainer}>
            <QuestionMedia
              question={{ imgUri: params.quest.img }}
            />
          </View>
          <View style={styles.questionContainer}>
            <Text>На этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачемНа этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачемНа этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачемНа этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачемНа этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачем     На этом месте будет описание вопроса и рассказ о том, как это важно и как интересно и что и когда и кто и зачем </Text>
            <Text style={styles.questionText}>Сколько планет в солнечной системе?</Text>
            <Form>
              <Item floatingLabel >
                <Label>Ответ:</Label>
                <Input />
              </Item>
            </Form>
            <Button block style={{ margin: 10 }}>
              <Text>Готово</Text>
            </Button>
          </View>
        </Content>
        <View style={styles.progressBar}>
          <Text>1/12</Text>
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  mediaContainer: {
    flex: 1,
    height: 150
  },
  questionContainer: {
    padding: 10
  },
  questionText: {
    marginTop: 10,
    fontWeight: 'bold'
  },
  progressBar: {
    height: 30,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
