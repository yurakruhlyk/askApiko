import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';

const PageTitle = ({ title, style }) => (
  <View style={style}>
    <Text style={s.title}>{title}</Text>
  </View>
);

PageTitle.propTypes = {
  title: T.string,
  style: ViewPropTypes.style,
};

export default PageTitle;
