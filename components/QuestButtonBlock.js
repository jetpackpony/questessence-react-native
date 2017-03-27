import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import StartButton from '../components/StartButton';
import ContinueButton from '../components/ContinueButton';

const QuestButtonBlock = ({
  isStarted, isPurchased,
  onStart, onContinue, onPurchase
}) => {
  if (isStarted) {
    return (<ContinueButton onPress={onContinue} />);
  } else {
    return (<StartButton onPress={onStart} />);
  }
};

export default QuestButtonBlock;
