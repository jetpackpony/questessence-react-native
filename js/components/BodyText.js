import React from 'react';
import { Text, StyleSheet } from 'react-native';
import BaseText from './BaseText';

export default ({ children }) => (
  <BaseText>
    <Text style={{
      fontSize: 14
    }}>
      {children}
    </Text>
  </BaseText>
);
