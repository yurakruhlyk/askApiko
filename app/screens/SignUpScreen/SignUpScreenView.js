import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { globalStyles } from '../../styles';
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
});

export default SignUpScreenView;
