import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

import QuestionMedia from '../components/QuestionMedia';

const QUESTION_STATE = {
  UNANSWERED: 0, CORRECT: 1, INCORRECT: 2
};

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: undefined,
      showAnswer: false,
      questionState: QUESTION_STATE.UNANSWERED
    };

    this.submitAnswer = this.submitAnswer.bind(this);
  }

  submitAnswer() {
    if (this.state.answer === this.props.question.answer) {
      this.setState({ questionState: QUESTION_STATE.CORRECT });
    } else {
      this.setState({ questionState: QUESTION_STATE.INCORRECT });
    }
  }

  render() {
    const correct = this.state.questionState === QUESTION_STATE.CORRECT;
    const incorrect = this.state.questionState === QUESTION_STATE.INCORRECT;

    let correctBlock = null;
    if (correct) {
      correctBlock = (
        <View>
          <Text>Правильно!</Text>
          <Text>{this.props.question.answerDesc}</Text>
        </View>
      );
    }
    if (incorrect) {
      correctBlock = (
        <View>
          <Text>Неправильно!</Text>
          <Text>Попробуйте ещё раз</Text>
        </View>
      );
    }
    if (this.state.showAnswer) {
      correctBlock = (
        <View>
          <Text>Правильный ответ: {this.props.question.answer}</Text>
          <Text>{this.props.question.answerDesc}</Text>
        </View>
      );
    }
    const showForm = this.state.questionState !== QUESTION_STATE.CORRECT && !this.state.showAnswer;
    return (
      <View>
        <View style={styles.mediaContainer}>
          <QuestionMedia
            media={this.props.question.media}
          />
        </View>
        <View style={styles.questionContainer}>
          <Text>
            {this.props.question.desc}
          </Text>
          <Text style={styles.questionText}>
            {this.props.question.questionText}
          </Text>

          {correctBlock}

          {((showForm) ?
            <View>
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
            : null
          )}

          {(correct || this.state.showAnswer)
              ? <Button><Text>Дальше</Text></Button>
              : null
          }
          {(incorrect && !this.state.showAnswer)
              ? <Button onPress={() => this.setState({ showAnswer: true })}><Text>Узнать ответ</Text></Button>
              : null
          }
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
