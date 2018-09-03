import React from 'react';
import { ScrollView, View } from 'react-native';
import T from 'prop-types';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {
  DrawerButton,
  PageTitle,
  Input,
  Button,
  TextLink,
  KeyboardAvoidingView,
} from '../../components';
import { globalStyles, headerStyles, dimensions } from '../../styles';
import s from './styles';

const SignUpScreenView = ({
  navigateToSignIn,
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
      <PageTitle style={s.pageTitle} title="Sign up" />
      <Input
        placeholder="username"
        style={s.inputContainer}
        onChange={text => onChange('username', text)}
      />
      <Input
        placeholder="email"
        style={s.inputContainer}
        onChange={text => onChange('email', text)}
      />
      <Input
        placeholder="password"
        style={s.inputContainer}
        secureTextEntry
        onChange={text => onChange('password', text)}
      />
      <HideWithKeyboard>
        <View style={s.linkContainer}>
          <TextLink title="Aleady has an account?" onPress={navigateToSignIn} />
        </View>
      </HideWithKeyboard>
    </View>
    <KeyboardAvoidingView offset={dimensions.doubleIndent} style={globalStyles.fillAll}>
      <View style={s.bottom}>
        <Button title="Sign Up" disabled={!isValid} onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  </ScrollView>
);
SignUpScreenView.propTypes = {
  navigateToSignIn: T.func,
  isValid: T.bool,
  onChange: T.func,
  onSubmit: T.func,
};

SignUpScreenView.navigationOptions = ({ navigation }) => ({
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  ...headerStyles,
});

export default SignUpScreenView;
