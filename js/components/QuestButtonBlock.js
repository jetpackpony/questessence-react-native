import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import { QuestStates, DownloadStates } from '../actions/Actions';

import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const QuestButtonBlock = ({
  progress, downloaded, isPurchasingSpinnerShown,
  onStart, onContinue, onPurchase, onDownload
}) => {
  if (!progress) {
    if (isPurchasingSpinnerShown) {
      return (
        <PrimaryButton disabled >
          Подождите...
        </PrimaryButton>
      );
    } else {
      return (
        <SecondaryButton onPress={onPurchase}>
          Купить
        </SecondaryButton>
      );
    }
  } else if (downloaded !== DownloadStates.DOWNLOADED) {
    switch (downloaded) {
      case DownloadStates.NOT_DOWNLOADED:
        return (
          <SecondaryButton onPress={onDownload}>
            Загрузить
          </SecondaryButton>
        );
      case DownloadStates.DOWNLOADING:
        return (
          <SecondaryButton disabled >
            Загрузка...
          </SecondaryButton>
        );
    }
  } else {
    switch (progress.questState) {
      case QuestStates.NOT_STARTED:
        return (
          <SecondaryButton onPress={onStart}>
            Начать
          </SecondaryButton>
        );
      case QuestStates.IN_PROGRESS:
      default:
        return (
          <SecondaryButton onPress={onContinue}>
            Продолжить
          </SecondaryButton>
        );
    }
  }
};

export default QuestButtonBlock;
