import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BoldBodyText from '../components/BoldBodyText';
import { SECONDARY_COLOR } from '../Colors';

export default ({ current, total }) => {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.bar, { flex: parseInt(current) }]}></View>
      <View style={[styles.rest, { flex: parseInt(total - current) }]}></View>
      <View style={styles.textContainer}>
        <BoldBodyText>{`${current} из ${total}`}</BoldBodyText>
      </View>
    </View>
  );
};

const barHeight = 30;
const styles = StyleSheet.create({
  progressBar: {
    height: barHeight,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bar: {
    height: barHeight,
    backgroundColor: SECONDARY_COLOR
  },
  rest: {
    height: barHeight
  },
  textContainer: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
