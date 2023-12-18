import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import QuestScreen from "./components/QuestScreen";
import QuestQuestionsScreen from "./components/QuestQuestionsScreen";
import LeftDrawer from "./components/Drawer";
import { HEADER_TEXT_COLOR, PRIMARY_COLOR } from "./Colors";

const Stack = createNativeStackNavigator();

export default function AppContainer() {
  return (
    <LeftDrawer>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
            headerTintColor: HEADER_TEXT_COLOR,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Quest"
            component={QuestScreen}
            options={{ title: "Quest" }}
          />
          <Stack.Screen
            name="QuestQuestions"
            component={QuestQuestionsScreen}
            options={{ title: "QuestQuestions" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LeftDrawer>
  );
}
