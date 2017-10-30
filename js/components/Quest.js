import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';
import QuestImageWithTitle from '../components/QuestImageWithTitle';
import QuestButtonsContainer from '../components/QuestButtonsContainer';

export default ({
  quest, navigation
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
      <QuestButtonsContainer navigation={navigation} />
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
