import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default ({ children }) => (
  <Text style={{
    fontFamily: 'sans-serif'
  }}>
    {children}
  </Text>
);
