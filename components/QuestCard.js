import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Card, CardItem
} from 'native-base';

import QuestImageWithTitle from './QuestImageWithTitle';

const QuestCard = ({ quest, onPress }) => {
  return (
    <Card>
      <CardItem cardBody onPress={onPress}>
        <View style={styles.cardImageContainer}>
          <QuestImageWithTitle
            img={quest.img}
            title={quest.title}
          />
        </View>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardImageContainer: {
    flex: 1,
    height: 300
  }
});

export default QuestCard;
