import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import QuestQuestionsScreen from './screens/QuestQuestionsScreen';
import { PRIMARY_COLOR, HEADER_TEXT_COLOR } from './Colors';

const buildStackNavigator = (extraProps) => createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Quest: { screen: QuestScreen },
    QuestQuestions: { screen: QuestQuestionsScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR
      },
      headerTintColor: HEADER_TEXT_COLOR,
      extraProps
    }
  }
);

export const makeNavigationAppContainer =
  (extraNavOptions) => createAppContainer(buildStackNavigator(extraNavOptions));
