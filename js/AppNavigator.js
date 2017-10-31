import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import QuestQuestionsScreen from './screens/QuestQuestionsScreen';
import { PRIMARY_COLOR, HEADER_TEXT_COLOR } from './Colors';

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    Quest: { screen: QuestScreen },
    QuestQuestions: { screen: QuestQuestionsScreen },
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR
      },
      headerTintColor: HEADER_TEXT_COLOR
    }
  }
);
