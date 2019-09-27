import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BaseText from './BaseText';

const QuestImageWithTitle = ({ img, title }) => {
  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.cardImage}
      source={{ uri: img }}
    >
      <View style={{ flex: 2 }}></View>
      <View style={styles.textContainer}>
        <View style={styles.textUnderlay}></View>
        <BaseText>
          <Text style={styles.cardHeader}>{title}</Text>
        </BaseText>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  textUnderlay: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'black',
    opacity: 0.7
  },
  textContainer: {
    flex: 1,
    padding: 10
  },
  cardHeader: {
    fontSize: 24,
    color: 'white'
  }
});

export default QuestImageWithTitle;
