import React from 'react';
import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../Colors';
import { List, ListItem, Text } from 'native-base';
import withLogin from '../withLogin';
import I18n from '../locales/i18n';

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
        <Text style={styles.headerText}>Questessence</Text>
      </ListItem>
      <ListItem button onPress={() => console.log("PP")}>
        <Text>Privacy Policy</Text>
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
