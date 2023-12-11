import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import QuestScreen from "./components/QuestScreen";
import QuestQuestionsScreen from "./components/QuestQuestionsScreen";

const Stack = createNativeStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
  );
}
