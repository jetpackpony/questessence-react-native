import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Footer,
  Button, Form, Label, Input, Item } from 'native-base';

import QuestionMedia from './QuestionMedia';
import AnswerBlock from './AnswerBlock/AnswerBlock';
import BodyText from './BodyText';
import BoldBodyText from './BoldBodyText';

const Question = ({ question }) => {
  return (
    <View>
      <View style={styles.mediaContainer}>
        <QuestionMedia
          media={question.media}
        />
      </View>
      <View style={styles.questionContainer}>
        <View style={{ padding: 10 }}>
          <BodyText>
            {question.desc}
          </BodyText>
        </View>
        <View style={{ padding: 10 }}>
          <BoldBodyText>
            {question.questionText}
          </BoldBodyText>
        </View>
        <AnswerBlock
          questionId={question.id}
          questId={question.quest}
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
  }
});

export default Question;
