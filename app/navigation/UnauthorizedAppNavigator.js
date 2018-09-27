import { createDrawerNavigator } from 'react-navigation';
import { Keyboard } from 'react-native';
import screens from '../constants/screens';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import AuthNavigator from './AuthNavigator';
import { UnauthorizedDrawer } from './components';

const UnauthorizedAppNavigator = createDrawerNavigator(
  {
    [screens.Home]: HomeNavigator,
    [screens.Search]: SearchNavigator,
    [screens.AboutUs]: AboutUsNavigator,
    [screens.Auth]: AuthNavigator,
  },
  {
    drawerPosition: 'left',
    contentComponent: UnauthorizedDrawer,
  }
);

const defaultGetStateForAction = UnauthorizedAppNavigator.router.getStateForAction;


UnauthorizedAppNavigator.router.getStateForAction = (action, state) => {
  if (
    state &&
    action.type === 'Navigation/DRAWER_OPENED'
  ) {
    Keyboard.dismiss();
  }

  return defaultGetStateForAction(action, state);
};

export default UnauthorizedAppNavigator;
