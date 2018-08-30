import { createDrawerNavigator } from 'react-navigation';
import screens from '../constants/screens';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import CreateQuestionNavigator from './CreateQuestionNavigator';
import ProfileNavigator from './ProfileNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import { AuthorizedDrawer } from './components';

export default createDrawerNavigator(
  {
    [screens.Home]: HomeNavigator,
    [screens.Search]: SearchNavigator,
    [screens.CreateQuestion]: CreateQuestionNavigator,
    [screens.Profile]: ProfileNavigator,
    [screens.AboutUs]: AboutUsNavigator,
  },
  {
    drawerPosition: 'left',
    contentComponent: AuthorizedDrawer,
  },
);
