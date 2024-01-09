import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import QuestScreen from "./components/QuestScreen";
import QuestQuestionsScreen from "./components/QuestQuestionsScreen";
import LeftDrawer from "./components/Drawer";
import { HEADER_TEXT_COLOR, PRIMARY_COLOR } from "./Colors";
import { Provider } from "react-redux";
import initStore from "./store/initStore";

const Stack = createNativeStackNavigator();

export default function AppContainer() {
  return (
    <Provider store={initStore()}>
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
              options={({ route }) => ({ title: route.params.title })}
            />
            <Stack.Screen
              name="QuestQuestions"
              component={QuestQuestionsScreen}
              options={({ route }) => ({ title: route.params.title })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LeftDrawer>
    </Provider>
  );
}
