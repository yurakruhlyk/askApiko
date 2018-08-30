import { createStackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import SearchScreen from '../screens/SearchScreen';

export default createStackNavigator({
  [screens.Search]: SearchScreen,
});
