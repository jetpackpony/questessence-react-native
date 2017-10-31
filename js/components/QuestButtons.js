import React from 'react';
import { View } from 'react-native';
import { QuestStates, DownloadStates } from '../actions/Actions';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default ({
  progress, downloaded, onStartClick, onContinueClick,
  onDownloadClick, onDeleteClick, downloadButtonText,
  downloadingButtonText, startButtonText,
  continueButtonText, deleteButtonText
}) => (
  <View>
    {
      (downloaded !== DownloadStates.DOWNLOADED)
        ? ((downloaded === DownloadStates.NOT_DOWNLOADED)
          ? (
            <SecondaryButton onPress={onDownloadClick}>
              {downloadButtonText}
            </SecondaryButton>
          )
          : (
            <SecondaryButton disabled >
              {downloadingButtonText}
            </SecondaryButton>
          )
        )
        : ((progress.questState === QuestStates.NOT_STARTED)
          ? (
            <SecondaryButton onPress={onStartClick}>
              {startButtonText}
            </SecondaryButton>
          )
          :(
            <SecondaryButton onPress={onContinueClick}>
              {continueButtonText}
            </SecondaryButton>
          )
        )
    }
    {
      (downloaded === DownloadStates.DOWNLOADED)
        ? (
          <PrimaryButton onPress={onDeleteClick}>
            {deleteButtonText}
          </PrimaryButton>
        )
        : null
    }
  </View>
);

