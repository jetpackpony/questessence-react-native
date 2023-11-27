import React from 'react';
import { Text, StyleSheet } from 'react-native';
import BodyText from './BodyText';

export default ({ children }) => (
  <BodyText>
    <Text style={{
      fontWeight: 'bold'
    }}>
      {children}
    </Text>
  </BodyText>
);
