import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../';
import s from './styles';

const Button = ({ title, onPress, disabled }) => (
  <Touchable onPress={disabled ? null : onPress} useOpacity>
    <View style={[s.button, disabled && s.disabled]}>
      <Text style={s.title}>{title}</Text>
    </View>
  </Touchable>
);

Button.propTypes = {
  title: T.string,
  onPress: T.func,
  disabled: T.bool,
};

export default Button;
