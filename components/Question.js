import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

import QuestionMedia from './QuestionMedia';
import AnswerBlock from './AnswerBlock/AnswerBlock';

const Question = ({
  question,
  questionState,
  nextQuestion,
  actionShowAnswer,
  actionSubmitAnswer
}) => {
  return (
    <View>
      <View style={styles.mediaContainer}>
        <QuestionMedia
          media={question.media}
        />
      </View>
      <View style={styles.questionContainer}>
        <Text>
          {question.desc}
        </Text>
        <Text style={styles.questionText}>
          {question.questionText}
        </Text>
        <AnswerBlock
          question={question}
          questionState={questionState}
          nextQuestion={nextQuestion}
          actionShowAnswer={actionShowAnswer}
          actionSubmitAnswer={actionSubmitAnswer}
        />
      </View>
    </View>
  );
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

export default Question;
