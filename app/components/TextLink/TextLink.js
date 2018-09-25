import React from 'react';
import { Text } from 'react-native';
import T from 'prop-types';
import { Touchable } from '../';
import s from './styles';

const TextLink = ({ title, onPress }) => (
  <Touchable onPress={onPress} useOpacity>
    <Text style={s.title}>{title}</Text>
  </Touchable>
);

TextLink.propTypes = {
  title: T.string,
  onPress: T.func,
};

export default TextLink;
