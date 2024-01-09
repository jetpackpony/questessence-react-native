import React from "react";
import { StyleSheet, Linking } from "react-native";
import { PRIMARY_COLOR } from "../../Colors";
import { List, ListItem, Text } from "native-base";
import { privacyPolicyURL } from "../../../config";
import { translate } from "../../i18n";

const DrawerContent = () => {
  return (
    <List>
      <ListItem noIndent first style={styles.header}>
        <Text style={styles.headerText}>QuestEssence</Text>
      </ListItem>
      <ListItem
        button
        onPress={() => {
          Linking.openURL(privacyPolicyURL).catch((err) =>
            console.error("An error occurred", err),
          );
        }}
      >
        <Text>{translate("privacyPolicyLink")}</Text>
      </ListItem>
    </List>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: 80,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DrawerContent;
