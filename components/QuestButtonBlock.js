import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import StartButton from '../components/StartButton';
import ContinueButton from '../components/ContinueButton';
import PurchaseButton from '../components/PurchaseButton';

const QuestButtonBlock = ({
  isStarted, isPurchased, isDownloading,
  onStart, onContinue, onPurchase
}) => {
  if (isPurchased) {
    if (isStarted) {
      return (<ContinueButton onPress={onContinue} />);
    } else if (isDownloading) {
      return (
        <Button block disabled style={{ margin: 10 }}>
          <Text>Загрузка...</Text>
        </Button>
      );
    } else {
      return (<StartButton onPress={onStart} />);
    }
  } else {
    return (<PurchaseButton onPress={onPurchase} />);
  }
};

export default QuestButtonBlock;
