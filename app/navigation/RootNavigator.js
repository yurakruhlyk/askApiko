import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { NavigationService } from '../services';
import screens from '../constants/screens';
import AuthorizedAppNavigator from './AuthorizedAppNavigator';
import UnauthorizedAppNavigator from './UnauthorizedAppNavigator';

export const RootNavigator = createSwitchNavigator({
  [screens.AuthorizedApp]: AuthorizedAppNavigator,
  [screens.UnauthorizedApp]: UnauthorizedAppNavigator,
}, { initialRouteName: screens.UnauthorizedApp });

const RootNavigatorContainer = () =>
  <RootNavigator ref={ref => NavigationService.init(ref)} />;

export default RootNavigatorContainer;
