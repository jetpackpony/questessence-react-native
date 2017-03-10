import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

import QuestionMedia from '../components/QuestionMedia';

export default class Question extends Component {
  render() {
    return (
      <View>
        <View style={styles.mediaContainer}>
          <QuestionMedia
            question={this.props.question}
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
      </View>
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
  }
});
