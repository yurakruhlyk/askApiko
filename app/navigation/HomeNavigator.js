import { createStackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import { QuestionsScreen, QuestionScreen } from '../screens';

export default createStackNavigator({
  [screens.Questions]: QuestionsScreen,
  [screens.Question]: QuestionScreen,
});
