import HomeScreen from "./HomeScreen";
export default function HomeScreenContainer({ navigation }) {
  return (
    <HomeScreen
      getOnQuestPress={(quest) => () =>
        navigation.navigate("Quest", {
          questId: quest.id,
          title: quest.title,
        })
      }
    />
  );
}
