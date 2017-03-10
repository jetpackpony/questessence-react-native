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
    this.state = {
      answer: undefined,
      questionState: QUESTION_STATE.UNANSWERED
    };

    this.submitAnswer = this.submitAnswer.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  submitAnswer() {
    this.setState({
      questionState: (
        (this.state.answer === this.props.question.answer)
          ? QUESTION_STATE.CORRECT
          : QUESTION_STATE.INCORRECT
      )
    });
  }

  showAnswer() {
    this.setState({ questionState: QUESTION_STATE.SHOW_ANSWER });
  }

  render() {
    const unanswered = this.state.questionState === QUESTION_STATE.UNANSWERED;
    const correct = this.state.questionState === QUESTION_STATE.CORRECT;
    const incorrect = this.state.questionState === QUESTION_STATE.INCORRECT;
    const showAnswer = this.state.questionState === QUESTION_STATE.SHOW_ANSWER;

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
            onPress={this.submitAnswer}
          >
            <Text>Готово</Text>
          </Button>
        </View>
      );
    }
    if (correct || showAnswer) {
      elements.push(
        <Button key='5'>
          <Text>Дальше</Text>
        </Button>
      );
    }
    if (incorrect && !showAnswer) {
      elements.push(
        <Button key='6' onPress={this.showAnswer}>
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
