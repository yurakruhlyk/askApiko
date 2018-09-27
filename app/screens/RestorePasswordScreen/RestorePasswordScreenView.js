import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import {
  Button,
  Input,
  KeyboardAvoidingView,
  PageTitle,
} from '../../components';
import { dimensions, globalStyles, headerStyles } from '../../styles';
import s from './styles';

const RestorePasswordScreenView = ({ onChange, isValid, onSubmit }) => (
  <View style={s.root}>
    <View style={s.top}>
      <PageTitle style={s.pageTitle} title="Restore Password" />
      <Text style={s.description}>
        We will send you an instruction how to reset your password to your email address.
      </Text>
      <Input
        placeholder="email"
        onChange={text => onChange('email', text)}
        keyboardType="email-address"
      />
    </View>
    <KeyboardAvoidingView offset={dimensions.doubleIndent} style={globalStyles.fillAll}>
      <View style={s.bottom}>
        <Button title="Send instruction" disabled={!isValid} onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  </View>
);

RestorePasswordScreenView.propTypes = {
  isValid: T.bool,
  onChange: T.func,
  onSubmit: T.func,
};

RestorePasswordScreenView.navigationOptions = {
  ...headerStyles,
};

export default RestorePasswordScreenView;
