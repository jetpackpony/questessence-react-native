import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Form, Label, Input, Item } from 'native-base';
import ButtonText from './ButtonText';
import BodyText from './BodyText';
import BoldBodyText from './BoldBodyText';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { QuestionStates } from '../actions/Actions';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: undefined };
  }

  render() {
    const {
      question, questionState,
      answerCorrectText, answerIncorrectText,
      tryAgainText, correctAnswerIsText,
      enterAnswerHereText, submitText,
      nextQuestionText, revealAnswerText,
      onActionSubmitAnswer, onActionShowAnswer,
      onNextQuestion
    } = this.props;


    const unanswered = questionState === QuestionStates.UNANSWERED;
    const correct = questionState === QuestionStates.CORRECT;
    const incorrect = questionState === QuestionStates.INCORRECT;
    const showAnswer = questionState === QuestionStates.SHOW_ANSWER;

    let elements = [];

    if (correct) {
      elements.push(
        <View key='1' style={{ padding: 10 }}>
          <Text style={{ color: 'green' }}>
            <BoldBodyText style={styles.correct}>
              {answerCorrectText}
            </BoldBodyText>
          </Text>
          <BodyText>
            {question.localizedAnswerDesc}
          </BodyText>
        </View>
      );
    }
    if (incorrect) {
      elements.push(
        <View key='2' style={{ padding: 10 }}>
          <Text style={{ color: 'red' }}>
            <BoldBodyText style={styles.incorrect}>
              {answerIncorrectText}
            </BoldBodyText>
          </Text>
          <BodyText>{tryAgainText}</BodyText>
        </View>
      );
    }
    if (showAnswer) {
      elements.push(
        <View key='3' style={{ padding: 10 }}>
          <Text style={{ color: 'green' }}>
            <BoldBodyText>
              {correctAnswerIsText}
              {' '}
              {question.localizedAnswer}
            </BoldBodyText>
          </Text>
          <BodyText>
            {question.localizedAnswerDesc}
          </BodyText>
        </View>
      );
    }
    if (unanswered || incorrect) {
      elements.push(
        <View key='4'>
          <Form>
            <Item floatingLabel >
              <Label>{enterAnswerHereText}</Label>
              <Input
                onChangeText={(answer) => this.setState({ answer })}
              />
            </Item>
          </Form>
          <SecondaryButton
            onPress={() => onActionSubmitAnswer(this.state.answer)}
          >
            {submitText}
          </SecondaryButton>
        </View>
      );
    }
    if (correct || showAnswer) {
      elements.push(
        <SecondaryButton key='5' onPress={() => {
          onNextQuestion();
          this.setState({ answer: undefined });
        }}>
          {nextQuestionText}
        </SecondaryButton>
      );
    }
    if (incorrect && !showAnswer) {
      elements.push(
        <PrimaryButton key='6' onPress={onActionShowAnswer}>
          {revealAnswerText}
        </PrimaryButton>
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
  correct: {
    color: 'green'
  },
  incorrect: {
    color: 'red'
  }
});

export default Answer;
