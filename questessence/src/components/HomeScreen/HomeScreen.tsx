import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ getOnQuestPress }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Quest"
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
