import React from "react";
import { Text } from "react-native";
import BodyText from "./BodyText";

export default ({ children }) => (
  <BodyText>
    <Text
      style={{
        fontWeight: "bold",
      }}
    >
      {children}
    </Text>
  </BodyText>
);
