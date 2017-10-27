import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem } from 'native-base';

import QuestImageWithTitle from './QuestImageWithTitle';

const QuestCard = ({ quest, onPress }) => (
  <Card>
    <CardItem cardBody button onPress={onPress}>
      <View style={styles.cardImageContainer}>
        <QuestImageWithTitle
          img={quest.cover}
          title={quest.localizedTitle}
        />
      </View>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  cardImageContainer: {
    flex: 1,
    height: 300
  }
});

export default QuestCard;
