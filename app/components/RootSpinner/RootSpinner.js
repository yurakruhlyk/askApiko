import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import s from './styles';

const RootSpinner = () => (
  <View style={s.root}>
    <ActivityIndicator size="large" />
  </View>
);

export default RootSpinner;
