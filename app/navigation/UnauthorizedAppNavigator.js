import { createDrawerNavigator } from 'react-navigation';
import screens from '../constants/screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import AuthNavigator from './AuthNavigator';

export default createDrawerNavigator(
  {
    [screens.Home]: HomeNavigator,
    [screens.AboutUs]: AboutUsNavigator,
    [screens.Auth]: AuthNavigator,
  },
  {
    drawerPosition: 'left',
  }
);
