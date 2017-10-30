import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BodyText from './BodyText';
import BoldBodyText from './BoldBodyText';

export default ({
  isCorrect, styledText, plainText
}) => {
  return (
    <View style={styles.container}>
      <Text style={isCorrect ? styles.correct : styles.incorrect}>
        <BoldBodyText>
          {styledText}
        </BoldBodyText>
      </Text>
      <BodyText>
        {plainText}
      </BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  correct: {
    color: 'green'
  },
  incorrect: {
    color: 'red'
  }
});

