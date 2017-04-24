import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';
import { connect } from 'react-redux';

import ButtonText from '../ButtonText';
import BodyText from '../BodyText';
import BoldBodyText from '../BoldBodyText';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

import {
  QuestStates, QuestionStates,
  answerQuestion, showCorrectAnswer, goToNextQuestion
} from '../../actions/Actions';

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
          <BoldBodyText style={styles.correct}>Правильно!</BoldBodyText>
          <BodyText>{this.props.question.answerDesc}</BodyText>
        </View>
      );
    }
    if (incorrect) {
      elements.push(
        <View key='2'>
          <BoldBodyText style={styles.incorrect}>Неправильно!</BoldBodyText>
          <BodyText>Попробуйте ещё раз</BodyText>
        </View>
      );
    }
    if (showAnswer) {
      elements.push(
        <View key='3'>
          <BoldBodyText>Правильный ответ: {this.props.question.answer}</BoldBodyText>
          <BodyText>{this.props.question.answerDesc}</BodyText>
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
          <SecondaryButton
            onPress={() => this.props.onActionSubmitAnswer(this.state.answer)}
          >
            Ответить
          </SecondaryButton>
        </View>
      );
    }
    if (correct || showAnswer) {
      elements.push(
        <SecondaryButton key='5' onPress={this.props.onNextQuestion}>
          Следующий Вопрос
        </SecondaryButton>
      );
    }
    if (incorrect && !showAnswer) {
      elements.push(
        <PrimaryButton key='6' onPress={this.props.onActionShowAnswer}>
          Узнать ответ
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerBlock);
