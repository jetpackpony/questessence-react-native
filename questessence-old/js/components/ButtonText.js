import React from 'react';
import { Text, StyleSheet } from 'react-native';
import BaseText from './BaseText';

export default ({ children }) => (
  <BaseText>
    <Text style={{
      fontWeight: '500',
      fontSize: 14
    }}>
      {children.toUpperCase()}
    </Text>
  </BaseText>
);
