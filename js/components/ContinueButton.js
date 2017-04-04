import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

const ContinueButton = ({ onPress }) => {
  return (
    <Button block success style={{ margin: 10 }} onPress={onPress}>
      <Text>Продолжить</Text>
    </Button>
  );
};

export default ContinueButton;
