import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import { QuestStates, DownloadStates } from '../actions/Actions';

import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

import I18n from '../locales/i18n';

const QuestButtonBlock = ({
  progress, downloaded, onStart, onContinue, onDownload
}) => {
  if (downloaded !== DownloadStates.DOWNLOADED) {
    switch (downloaded) {
      case DownloadStates.NOT_DOWNLOADED:
        return (
          <SecondaryButton onPress={onDownload}>
            {I18n.t('download')}
          </SecondaryButton>
        );
      case DownloadStates.DOWNLOADING:
        return (
          <SecondaryButton disabled >
            {I18n.t('downloading')}
          </SecondaryButton>
        );
    }
  } else {
    switch (progress.questState) {
      case QuestStates.NOT_STARTED:
        return (
          <SecondaryButton onPress={onStart}>
            {I18n.t('start')}
          </SecondaryButton>
        );
      case QuestStates.IN_PROGRESS:
      default:
        return (
          <SecondaryButton onPress={onContinue}>
            {I18n.t('continue')}
          </SecondaryButton>
        );
    }
  }
};

export default QuestButtonBlock;
