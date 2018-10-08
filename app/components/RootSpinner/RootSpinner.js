import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import T from 'prop-types';
import s from './styles';

const RootSpinner = ({ size = 'large' }) => (
  <View style={s.root}>
    <ActivityIndicator size={size} />
  </View>
);

RootSpinner.propTypes = {
  size: T.string,
};

export default RootSpinner;
