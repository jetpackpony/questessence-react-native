import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionMedia from './QuestionMedia';
import AnswerTextLabelsContainer from './AnswerTextLabelsContainer';
import AnswerFormContainer from './AnswerFormContainer';
import BodyText from './BodyText';
import BoldBodyText from './BoldBodyText';

const Question = ({ question }) => (
  <View>
    <View style={styles.mediaContainer}>
      <QuestionMedia
        media={question.media}
      />
    </View>
    <View style={styles.questionContainer}>
      <View style={styles.descContainer}>
        <BodyText>
          {question.localizedDesc}
        </BodyText>
      </View>
      <View style={styles.questionTextContainer}>
        <BoldBodyText>
          {question.localizedQuestionText}
        </BoldBodyText>
      </View>
      <AnswerTextLabelsContainer
        questionId={question.id}
      />
      <AnswerFormContainer
        questId={question.quest}
        questionId={question.id}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  mediaContainer: {
    flex: 1,
    height: 150
  },
  questionContainer: {
    padding: 10
  },
  descContainer: {
    padding: 10
  },
  questionTextContainer: {
    padding: 10
  }
});

export default Question;
