import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class QuestImageWithTitle extends Component {
  render() {
    return (
      <Image
        resizeMode='cover'
        style={styles.cardImage}
        source={{ uri: this.props.img }}
      >
        <View style={{ flex: 2 }}></View>
        <View style={{ flex: 1 }}>
          <View style={styles.textUnderlay}></View>
          <View style={styles.textContainer}>
            <Text style={styles.cardHeader}>{this.props.title}</Text>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  textUnderlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.7
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10
  },
  cardHeader: {
    fontSize: 24,
    color: 'white',
    textAlign: 'right'
  }
});
