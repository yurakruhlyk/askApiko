import React from 'react';
import T from 'prop-types';
import { View, Image } from 'react-native';
import s from './styles';

const Avatar = ({ source, profile, author }) => (
  <View style={[profile && s.profile, author && s.author]}>
    <Image source={source} style={s.image} />
  </View>
);

Avatar.propTypes = {
  source: T.number,
  profile: T.bool,
  author: T.bool,
};

export default Avatar;
