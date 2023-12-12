import HomeScreen from "./HomeScreen";
export default function HomeScreenContainer({ navigation }) {
  return <HomeScreen navigate={navigation.navigate} />;
}
