import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton } from '../../components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';

const SignUpScreenView = ({ navigateToSignIn }) => (
  <View>
    <Text style={globalStyles.withMarginBottom}>SignUpScreenView</Text>
    <Text onPress={navigateToSignIn}>Click for go to Sign in</Text>
  </View>
);
SignUpScreenView.propTypes = {
  navigateToSignIn: T.func,
};

SignUpScreenView.navigationOptions = ({ navigation }) => ({
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  ...headerStyles,
});

export default SignUpScreenView;
