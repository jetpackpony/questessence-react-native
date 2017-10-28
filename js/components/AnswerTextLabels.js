import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BodyText from './BodyText';
import BoldBodyText from './BoldBodyText';

export default ({
  question, answerCorrectText,
  answerIncorrectText, tryAgainText,
  correctAnswerIsText, correct,
  incorrect, showAnswer
}) => {
  return (
    <View>
      {(correct)
          ? (
            <View style={{ padding: 10 }}>
              <Text style={{ color: 'green' }}>
                <BoldBodyText style={styles.correct}>
                  {answerCorrectText}
                </BoldBodyText>
              </Text>
              <BodyText>
                {question.localizedAnswerDesc}
              </BodyText>
            </View>
          )
          : null
      }
      {(incorrect)
          ? (
            <View style={{ padding: 10 }}>
              <Text style={{ color: 'red' }}>
                <BoldBodyText style={styles.incorrect}>
                  {answerIncorrectText}
                </BoldBodyText>
              </Text>
              <BodyText>{tryAgainText}</BodyText>
            </View>
          )
          : null
      }
      {(showAnswer)
          ? (
            <View style={{ padding: 10 }}>
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
          )
          : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  correct: {
    color: 'green'
  },
  incorrect: {
    color: 'red'
  }
});

