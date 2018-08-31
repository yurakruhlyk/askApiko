import { createDrawerNavigator } from 'react-navigation';
import screens from '../constants/screens';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import AuthNavigator from './AuthNavigator';
import { UnauthorizedDrawer } from './components';

export default createDrawerNavigator(
  {
    [screens.Home]: HomeNavigator,
    [screens.Search]: SearchNavigator,
    [screens.AboutUs]: AboutUsNavigator,
    [screens.Auth]: AuthNavigator,
  },
  {
    initialRouteName: screens.Auth, // dev
    drawerPosition: 'left',
    contentComponent: UnauthorizedDrawer,
  }
);
