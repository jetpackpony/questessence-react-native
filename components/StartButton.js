import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

const StartButton = ({ onPress }) => {
  return (
    <Button block success style={{ margin: 10 }} onPress={onPress}>
      <Text>Начать</Text>
    </Button>
  );
};

export default StartButton;
