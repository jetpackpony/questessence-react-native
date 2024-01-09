import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { translate } from "../../i18n";
import BoldBodyText from "../BoldBodyText";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        <BoldBodyText>{translate("questCompleteText")}</BoldBodyText>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
  },
});
