import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import StartButton from '../components/StartButton';
import ContinueButton from '../components/ContinueButton';
import PurchaseButton from '../components/PurchaseButton';

import { QuestStates, DownloadStates } from '../actions/Actions';

const QuestButtonBlock = ({
  progress, downloaded, isPurchasingSpinnerShown,
  onStart, onContinue, onPurchase, onDownload
}) => {
  if (!progress) {
    if (isPurchasingSpinnerShown) {
      return (
        <Button block disabled style={{ margin: 10 }}>
          <Text>Подождите...</Text>
        </Button>
      );
    } else {
      return (<PurchaseButton onPress={onPurchase} />);
    }
  } else if (downloaded !== DownloadStates.DOWNLOADED) {
    switch (downloaded) {
      case DownloadStates.NOT_DOWNLOADED:
        return (
          <Button block success style={{ margin: 10 }} onPress={onDownload}>
            <Text>Загрузить</Text>
          </Button>
        );
      case DownloadStates.DOWNLOADING:
        return (
          <Button block disabled style={{ margin: 10 }}>
            <Text>Загрузка...</Text>
          </Button>
        );
    }
  } else {
    switch (progress.questState) {
      case QuestStates.NOT_STARTED:
        return (<StartButton onPress={onStart} />);
      case QuestStates.IN_PROGRESS:
      default:
        return (<ContinueButton onPress={onContinue} />);
    }
  }
};

export default QuestButtonBlock;
