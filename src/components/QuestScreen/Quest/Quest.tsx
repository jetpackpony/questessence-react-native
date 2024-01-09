import React from "react";
import { View, StyleSheet } from "react-native";
import BodyText from "../../BodyText";
import QuestImageWithTitle from "../../QuestImageWithTitle";
import QuestButtonsContainer from "./QuestButtons";
import { chooseTranslation } from "../../../i18n";

export default ({ quest, navigation }) => (
  <View>
    <View style={styles.coverContainer}>
      <QuestImageWithTitle
        img={quest.cover}
        title={chooseTranslation(quest.title)}
      />
    </View>
    <View style={styles.descriptionContainer}>
      <View style={styles.description}>
        <BodyText>{chooseTranslation(quest.desc)}</BodyText>
      </View>
      <QuestButtonsContainer navigation={navigation} quest={quest} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  coverContainer: {
    flex: 1,
    height: 250,
  },
  descriptionContainer: {
    padding: 10,
  },
  description: {
    padding: 10,
  },
});
