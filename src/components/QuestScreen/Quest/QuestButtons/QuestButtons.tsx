import React from "react";
import { View } from "react-native";
import { QuestStates, DownloadStates } from "../../../../store/constants";
import PrimaryButton from "../../../PrimaryButton";
import SecondaryButton from "../../../SecondaryButton";
import { translate } from "../../../../i18n";

export default ({
  progress,
  downloaded,
  onStartClick,
  onContinueClick,
  onDownloadClick,
  onDeleteClick,
  onRestartClick,
}) => (
  <View>
    {downloaded !== DownloadStates.DOWNLOADED ? (
      downloaded === DownloadStates.NOT_DOWNLOADED ? (
        <SecondaryButton onPress={onDownloadClick}>
          {translate("download")}
        </SecondaryButton>
      ) : (
        <SecondaryButton disabled>{translate("downloading")}</SecondaryButton>
      )
    ) : progress.questState === QuestStates.NOT_STARTED ? (
      <SecondaryButton onPress={onStartClick}>
        {translate("start")}
      </SecondaryButton>
    ) : (
      <View>
        <SecondaryButton onPress={onContinueClick}>
          {translate("continue")}
        </SecondaryButton>
        <SecondaryButton onPress={onRestartClick}>
          {translate("restart")}
        </SecondaryButton>
      </View>
    )}
    {downloaded === DownloadStates.DOWNLOADED ? (
      <PrimaryButton onPress={onDeleteClick}>
        {translate("deleteQuest")}
      </PrimaryButton>
    ) : null}
  </View>
);
