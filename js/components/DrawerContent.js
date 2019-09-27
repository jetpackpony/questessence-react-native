import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import { PRIMARY_COLOR } from '../Colors';
import { List, ListItem, Text } from 'native-base';
import withLogin from '../withLogin';
import I18n from '../locales/i18n';
import { privacyPolicyURL } from '../config';

const LoginListItem = withLogin(
  ({ isLoggedIn, onLogin, onLogout }) => (
    (isLoggedIn)
      ? (
        <ListItem button onPress={onLogout}>
          <Text>{I18n.t("logout")}</Text>
        </ListItem>
      )
      : (
        <ListItem button onPress={onLogin}>
          <Text>{I18n.t("loginWithFacebook")}</Text>
        </ListItem>
      )
  )
);

const DrawerContent = () => {
  return (
    <List>
      <ListItem noIndent first style={styles.header}>
        <Text style={styles.headerText}>QuestEssence</Text>
      </ListItem>
      <ListItem button onPress={() => {
        Linking.openURL(privacyPolicyURL)
          .catch((err) => console.error('An error occurred', err));
      }}>
        <Text>{I18n.t("privacyPolicyLink")}</Text>
      </ListItem>
      <LoginListItem/>
    </List>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: 80
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default DrawerContent;
