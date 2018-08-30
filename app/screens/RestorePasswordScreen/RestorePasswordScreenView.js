import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { headerStyles } from '../../styles';
import s from './styles';

const RestorePasswordScreenView = () => (
  <View>
    <Text>RestorePasswordScreenView</Text>
  </View>
);
RestorePasswordScreenView.propTypes = {
};

RestorePasswordScreenView.navigationOptions = {
  ...headerStyles,
};

export default RestorePasswordScreenView;
