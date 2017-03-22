import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';
import { connect } from 'react-redux';

import {
  QuestStates, QuestionStates,
  answerQuestion, showCorrectAnswer, goToNextQuestion
} from '../../actions/Actions';

const QUESTION_STATE = {
  UNANSWERED: 0, CORRECT: 1, INCORRECT: 2, SHOW_ANSWER: 3
};

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions.byId[ownProps.questionId];
  return {
    question,
    questionState: state.progress[question.quest].currentQuestionState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const questionId = ownProps.questionId;
  const questId = ownProps.questId;
  return {
    onActionSubmitAnswer: (answer) => {
      dispatch(answerQuestion(questId, questionId, answer));
    },
    onActionShowAnswer: () => {
      dispatch(showCorrectAnswer(questId));
    },
    onNextQuestion: () => {
      dispatch(goToNextQuestion(questId));
    }
  };
};

class AnswerBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: undefined };
  }

  render() {
    const unanswered = this.props.questionState === QuestionStates.UNANSWERED;
    const correct = this.props.questionState === QuestionStates.CORRECT;
    const incorrect = this.props.questionState === QuestionStates.INCORRECT;
    const showAnswer = this.props.questionState === QuestionStates.SHOW_ANSWER;

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
            onPress={() => this.props.onActionSubmitAnswer(this.state.answer)}
          >
            <Text>Готово</Text>
          </Button>
        </View>
      );
    }
    if (correct || showAnswer) {
      elements.push(
        <Button key='5' onPress={this.props.onNextQuestion}>
          <Text>Дальше</Text>
        </Button>
      );
    }
    if (incorrect && !showAnswer) {
      elements.push(
        <Button key='6' onPress={this.props.onActionShowAnswer}>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerBlock);
