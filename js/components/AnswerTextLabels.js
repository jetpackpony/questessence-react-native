import React from 'react';
import { View } from 'react-native';
import AnswerTextLabel from './AnswerTextLabel';

export default ({
  question, answerCorrectText,
  answerIncorrectText, tryAgainText,
  correctAnswerIsText, correct,
  incorrect, showAnswer
}) => {
  if (incorrect) {
    return (
      <AnswerTextLabel
        isCorrect={false}
        styledText={answerIncorrectText}
        plainText={tryAgainText}
      />
    );
  }

  if (correct) {
    return (
      <AnswerTextLabel
        isCorrect={true}
        styledText={answerCorrectText}
        plainText={question.localizedAnswerDesc}
      />
    );
  }

  if (showAnswer) {
    return (
      <AnswerTextLabel
        isCorrect={true}
        styledText={correctAnswerIsText + " " + question.localizedAnswer}
        plainText={question.localizedAnswerDesc}
      />
    );
  }

  return (<View></View>);
};

