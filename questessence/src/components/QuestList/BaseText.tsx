import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default ({ children }) => (
  <Text style={{
    backgroundColor: 'transparent'
  }}>
    {children}
  </Text>
);
