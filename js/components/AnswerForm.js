import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Label, Input, Item } from 'native-base';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import AnswerFormInputContainer from './AnswerFormInputContainer';

export default ({
  questionId, questId,
  nextQuestionText, revealAnswerText,
  onActionShowAnswer, onNextQuestion,
  unanswered, correct,
  incorrect, showAnswer
}) => (
  <View>
    {(unanswered || incorrect)
        ? (
          <AnswerFormInputContainer
            questId={questId}
            questionId={questionId}
          />
        )
        : null
    }
    {(correct || showAnswer)
        ? (
          <SecondaryButton onPress={() => onNextQuestion()}>
            {nextQuestionText}
          </SecondaryButton>
        )
        : null
    }
    {(incorrect && !showAnswer)
        ? (
          <PrimaryButton onPress={onActionShowAnswer}>
            {revealAnswerText}
          </PrimaryButton>
        )
        : null
    }
  </View>
);

