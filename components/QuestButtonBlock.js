import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import StartButton from '../components/StartButton';
import ContinueButton from '../components/ContinueButton';
import PurchaseButton from '../components/PurchaseButton';

import { QuestStates } from '../actions/Actions';

const QuestButtonBlock = ({
  progress,
  onStart, onContinue, onPurchase, onDownload
}) => {
  if (progress) {
    switch (progress.questState) {
      case QuestStates.PURCHASED:
        return (
          <Button block success style={{ margin: 10 }} onPress={onDownload}>
            <Text>Загрузить</Text>
          </Button>
        );
      case QuestStates.DOWNLOADING:
        return (
          <Button block disabled style={{ margin: 10 }}>
            <Text>Загрузка...</Text>
          </Button>
        );
      case QuestStates.NOT_STARTED:
        return (<StartButton onPress={onStart} />);
      case QuestStates.IN_PROGRESS:
      default:
        return (<ContinueButton onPress={onContinue} />);
    }
  } else {
    return (<PurchaseButton onPress={onPurchase} />);
  }
};

export default QuestButtonBlock;
