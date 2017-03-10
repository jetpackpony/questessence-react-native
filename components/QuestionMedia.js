import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class QuestionMedia extends Component {
  render() {
    return (
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{ uri: this.props.media.uri }}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
