import { createStackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import { ProfileScreen } from '../screens';

export default createStackNavigator({
  [screens.Profile]: ProfileScreen,
});
