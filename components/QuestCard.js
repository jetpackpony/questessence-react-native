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

export default class QuestCard extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody onPress={this.props.onPress}>
          <View style={styles.cardImageContainer}>
            <QuestImageWithTitle
              img={this.props.quest.img}
              title={this.props.quest.title}
            />
          </View>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardImageContainer: {
    flex: 1,
    height: 300
  }
});
