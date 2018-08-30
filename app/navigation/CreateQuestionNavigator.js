import { createStackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import { CreateQuestionScreen } from '../screens';

export default createStackNavigator({
  [screens.CreateQuestion]: CreateQuestionScreen,
});
