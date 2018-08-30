import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import s from './styles';

const RootSpinner = () => (
  <View style={[StyleSheet.absoluteFill, s.root]}>
    <ActivityIndicator size="large" />
  </View>
);

export default RootSpinner;
