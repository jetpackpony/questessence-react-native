import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Label, Input, Item } from 'native-base';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

class AnswerFormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: undefined };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ answer: undefined });
  }

  render() {
    const {
      enterAnswerHereText, submitText,
      onActionSubmitAnswer
    } = this.props;
    return (
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
    );
  }
};

export default AnswerFormInput;
