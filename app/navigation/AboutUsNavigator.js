import { createStackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import { AboutUsScreen } from '../screens';

export default createStackNavigator({
  [screens.AboutUs]: AboutUsScreen,
});
