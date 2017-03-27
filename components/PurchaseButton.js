import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

const PurchaseButton = ({ onPress }) => {
  return (
    <Button block success style={{ margin: 10 }} onPress={onPress}>
      <Text>Купить</Text>
    </Button>
  );
};

export default PurchaseButton;
