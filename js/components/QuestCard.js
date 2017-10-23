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

import { chooseTranslation, getLocales } from '../reducers/utils';
import QuestImageWithTitle from './QuestImageWithTitle';

const QuestCard = ({ quest, onPress }) => {
  return (
    <Card>
      <CardItem cardBody button onPress={onPress}>
        <View style={styles.cardImageContainer}>
          <QuestImageWithTitle
            img={quest.cover}
            title={chooseTranslation(quest.title, getLocales())}
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
