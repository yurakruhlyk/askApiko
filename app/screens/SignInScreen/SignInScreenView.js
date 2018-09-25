import React from 'react';
import { View, ScrollView } from 'react-native';
import T from 'prop-types';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {
  PageTitle,
  Input,
  Button,
  TextLink,
  KeyboardAvoidingView,
} from '../../components';
import {
  globalStyles,
  headerStyles,
  dimensions,
} from '../../styles';
import s from './styles';

const SignInScreenView = ({
  navigateToRestorePassword,
  isValid,
  onChange,
  onSubmit,
}) => (
  <ScrollView
    contentContainerStyle={s.root}
    keyboardShouldPersistTaps="handled"
    scrollEnabled={false}
  >
    <View style={s.top}>
      <PageTitle style={s.pageTitle} title="Sign in" />
      <Input
        placeholder="email"
        style={s.inputContainer}
        onChange={text => onChange('email', text)}
        keyboardType="email-address"
      />
      <Input
        placeholder="password"
        style={s.inputContainer}
        secureTextEntry
        onChange={text => onChange('password', text)}
      />
      <HideWithKeyboard>
        <View style={s.linkContainer}>
          <TextLink title="Forgot password?" onPress={navigateToRestorePassword} />
        </View>
      </HideWithKeyboard>
    </View>
    <KeyboardAvoidingView offset={dimensions.doubleIndent} style={globalStyles.fillAll}>
      <View style={s.bottom}>
        <Button title="Sign in" disabled={!isValid} onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  </ScrollView>
);
SignInScreenView.propTypes = {
  navigateToRestorePassword: T.func,
  isValid: T.bool,
  onChange: T.func,
  onSubmit: T.func,
};

SignInScreenView.navigationOptions = {
  ...headerStyles,
};

export default SignInScreenView;
