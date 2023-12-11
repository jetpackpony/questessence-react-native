import { Button, StyleSheet, Text, View } from "react-native";
import { chooseTranslation, translate } from "../../i18n";

export default function HomeScreen({ getOnQuestPress }) {
  return (
    <View style={styles.container}>
      <Text>{translate("homeTitle")}</Text>
      <Button
        title={chooseTranslation({ en: "Go to Quest", ru: "Го ту квест" })}
        onPress={getOnQuestPress({ id: "kdjfsk", title: "Test Quest" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
