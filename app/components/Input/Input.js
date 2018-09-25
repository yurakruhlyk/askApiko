import React from 'react';
import { TextInput, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import { colors } from '../../styles';
import s from './styles';

const Input = ({
  value,
  placeholder,
  style,
  onChange,
  secureTextEntry,
  ...props
}) => (
  <TextInput
    style={[s.input, style]}
    value={value}
    placeholder={placeholder}
    onChangeText={onChange}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid={colors.input.background}
    {...props}
  />
);

Input.propTypes = {
  value: T.string,
  placeholder: T.string,
  style: ViewPropTypes.style,
  secureTextEntry: T.bool,
  onChange: T.func,
};

export default Input;
