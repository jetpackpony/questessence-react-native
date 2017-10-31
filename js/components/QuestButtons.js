import React from 'react';
import { View } from 'react-native';
import { QuestStates, DownloadStates } from '../actions';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default ({
  progress, downloaded, onStartClick, onContinueClick,
  onDownloadClick, onDeleteClick, onRestartClick,
  downloadButtonText, downloadingButtonText, startButtonText,
  continueButtonText, deleteButtonText, restartButtonText
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
            <View>
              <SecondaryButton onPress={onContinueClick}>
                {continueButtonText}
              </SecondaryButton>
              <SecondaryButton onPress={onRestartClick}>
                {restartButtonText}
              </SecondaryButton>
            </View>
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

