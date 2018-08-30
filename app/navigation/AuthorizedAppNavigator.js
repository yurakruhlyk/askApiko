import { createDrawerNavigator } from 'react-navigation';
import screens from '../constants/screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import CreateQuestionNavigator from './CreateQuestionNavigator';
import ProfileNavigator from './ProfileNavigator';

export default createDrawerNavigator(
  {
    [screens.Home]: HomeNavigator,
    [screens.CreateQuestion]: CreateQuestionNavigator,
    [screens.Profile]: ProfileNavigator,
    [screens.AboutUs]: AboutUsNavigator,
  },
  {
    drawerPosition: 'left',
  },
);
