import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

const QUESTION_STATE = {
  UNANSWERED: 0, CORRECT: 1, INCORRECT: 2, SHOW_ANSWER: 3
};

export default class AnswerBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: undefined };
  }

  render() {
    const unanswered = this.props.questionState === QUESTION_STATE.UNANSWERED;
    const correct = this.props.questionState === QUESTION_STATE.CORRECT;
    const incorrect = this.props.questionState === QUESTION_STATE.INCORRECT;
    const showAnswer = this.props.questionState === QUESTION_STATE.SHOW_ANSWER;

    let elements = [];

    if (correct) {
      elements.push(
        <View key='1'>
          <Text>Правильно!</Text>
          <Text>{this.props.question.answerDesc}</Text>
        </View>
      );
    }
    if (incorrect) {
      elements.push(
        <View key='2'>
          <Text>Неправильно!</Text>
          <Text>Попробуйте ещё раз</Text>
        </View>
      );
    }
    if (showAnswer) {
      elements.push(
        <View key='3'>
          <Text>Правильный ответ: {this.props.question.answer}</Text>
          <Text>{this.props.question.answerDesc}</Text>
        </View>
      );
    }
    if (unanswered || incorrect) {
      elements.push(
        <View key='4'>
          <Form>
            <Item floatingLabel >
              <Label>Ответ:</Label>
              <Input
                onChangeText={(answer) => this.setState({ answer })}
              />
            </Item>
          </Form>
          <Button
            block
            style={{ margin: 10 }}
            onPress={() => this.props.actionSubmitAnswer(this.state.answer)}
          >
            <Text>Готово</Text>
          </Button>
        </View>
      );
    }
    if (correct || showAnswer) {
      elements.push(
        <Button key='5' onPress={this.props.nextQuestion}>
          <Text>Дальше</Text>
        </Button>
      );
    }
    if (incorrect && !showAnswer) {
      elements.push(
        <Button key='6' onPress={this.props.actionShowAnswer}>
          <Text>Узнать ответ</Text>
        </Button>
      );
    }

    return (
      <View>
        {elements}
      </View>
    );
  }
};

const styles = StyleSheet.create({
});
