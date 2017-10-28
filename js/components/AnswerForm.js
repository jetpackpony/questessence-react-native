import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Label, Input, Item } from 'native-base';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: undefined };
  }

  render() {
    const {
      enterAnswerHereText, submitText,
      nextQuestionText, revealAnswerText,
      onActionSubmitAnswer, onActionShowAnswer,
      onNextQuestion, unanswered, correct,
      incorrect, showAnswer
    } = this.props;
    return (
      <View>
        {(unanswered || incorrect)
            ? (
              <View>
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
            )
            : null
        }
        {(correct || showAnswer)
            ? (
              <SecondaryButton onPress={() => {
                onNextQuestion();
                this.setState({ answer: undefined });
              }}>
              {nextQuestionText}
            </SecondaryButton>
            )
            : null
        }
        {(incorrect && !showAnswer)
            ? (
              <PrimaryButton onPress={onActionShowAnswer}>
                {revealAnswerText}
              </PrimaryButton>
            )
            : null
        }
      </View>
    );
  }
};

export default AnswerForm;
