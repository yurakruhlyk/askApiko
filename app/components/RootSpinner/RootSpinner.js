import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import s from './styles';

const Spinner = () => (
  <View style={s.root}>
    <ActivityIndicator size="large" />
  </View>
);

export default Spinner;
