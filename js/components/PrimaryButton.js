import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { PRIMARY_COLOR } from '../Colors';
import ButtonText from '../components/ButtonText';

export default ({ children, onPress, disabled }) => {
  if (disabled) {
    return (
      <Button
        block
        style={{
          margin: 10
        }}
        disabled
      >
          <ButtonText>
            {children}
          </ButtonText>
      </Button>
    );
  }
  return (
    <Button
      block
      style={{
        margin: 10,
        backgroundColor: PRIMARY_COLOR
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ color: 'white' }}>
        <ButtonText>
          {children}
        </ButtonText>
      </Text>
    </Button>
  );
};
