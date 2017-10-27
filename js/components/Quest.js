import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';
import PrimaryButton from '../components/PrimaryButton';
import QuestImageWithTitle from '../components/QuestImageWithTitle';
import QuestButtonBlock from '../components/QuestButtonBlock';

export default ({
  quest, progress, downloaded,
  onStartClick, onContinueClick,
  onDownloadClick, onDelete,
  deleteButtonText
}) => (
  <View>
    <View style={styles.coverContainer}>
      <QuestImageWithTitle
        img={quest.cover}
        title={quest.localizedTitle}
      />
    </View>
    <View style={styles.descriptionContainer}>
      <View style={styles.description}>
        <BodyText>{quest.localizedDesc}</BodyText>
      </View>
      <QuestButtonBlock
        progress={progress}
        downloaded={downloaded}
        onStart={onStartClick}
        onContinue={onContinueClick}
        onDownload={onDownloadClick}
      />
      {
        (progress)
          ? (
            <PrimaryButton onPress={onDelete}>
              {deleteButtonText}
            </PrimaryButton>
          )
          : null
      }
    </View>
  </View>
);

const styles = StyleSheet.create({
  coverContainer: {
    flex: 1,
    height: 250
  },
  descriptionContainer: {
    padding: 10
  },
  description: {
    padding: 10
  }
});
