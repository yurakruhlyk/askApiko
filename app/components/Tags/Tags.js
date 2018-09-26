import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

const Tags = ({ tags }) => (
  <View style={s.tags}>
    {tags.map((tag, key) => (
      <Text
        key={`${key}-${tag}`} // eslint-disable-line
        style={s.tag}
      >
        {tag}
      </Text>
    ))}
  </View>
);

Tags.propTypes = {
  tags: T.array,
};

export default Tags;
