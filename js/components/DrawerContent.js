import React from 'react';
import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../Colors';
import { List, ListItem, Text } from 'native-base';

const DrawerContent = () => {
  return (
    <List>
      <ListItem noIndent first style={styles.header}>
        <Text style={styles.headerText}>Questessence</Text>
      </ListItem>
      <ListItem button onPress={() => console.log("PP")}>
        <Text>Privacy Policy</Text>
      </ListItem>
      <ListItem button onPress={() => console.log("Logout")}>
        <Text>Logout</Text>
      </ListItem>
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
