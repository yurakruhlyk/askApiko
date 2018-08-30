import { createStackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
  SignUpScreen,
  SignInScreen,
  RestorePasswordScreen,
} from '../screens';

export default createStackNavigator({
  [screens.SignUp]: SignUpScreen,
  [screens.SignIn]: SignInScreen,
  [screens.RestorePassword]: RestorePasswordScreen,
});
