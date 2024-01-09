import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";
import { SECONDARY_COLOR } from "../Colors";
import ButtonText from "./ButtonText";

export default ({ children, onPress, disabled }) => {
  if (disabled) {
    return (
      <Button
        block
        style={{
          margin: 10,
        }}
        disabled
      >
        <ButtonText>{children}</ButtonText>
      </Button>
    );
  }
  return (
    <Button
      block
      style={{
        margin: 10,
        backgroundColor: SECONDARY_COLOR,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "black" }}>
        <ButtonText>{children}</ButtonText>
      </Text>
    </Button>
  );
};
