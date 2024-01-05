import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Form, Label, Input, Item } from "native-base";
import { translate } from "../../../../../i18n";
import SecondaryButton from "../../../../SecondaryButton";

class AnswerFormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: undefined };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ answer: undefined });
  }

  render() {
    const { onActionSubmitAnswer } = this.props;
    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>{translate("answerEnterAnswer")}</Label>
            <Input onChangeText={(answer) => this.setState({ answer })} />
          </Item>
        </Form>
        <SecondaryButton
          onPress={() => onActionSubmitAnswer(this.state.answer)}
        >
          {translate("answerSubmit")}
        </SecondaryButton>
      </View>
    );
  }
}

export default AnswerFormInput;
