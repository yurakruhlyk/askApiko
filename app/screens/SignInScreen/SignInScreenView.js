import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { globalStyles } from '../../styles';
import s from './styles';

const SignInScreenView = ({ navigateToRestorePassword }) => (
  <View>
    <Text style={globalStyles.withMarginBottom}>SignInScreenView</Text>
    <Text onPress={navigateToRestorePassword}>Click for go to ResetPassword screen</Text>
  </View>
);
SignInScreenView.propTypes = {
  navigateToRestorePassword: T.func,
};

SignInScreenView.navigationOptions = ({ navigation }) => ({
});

export default SignInScreenView;
