import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../../../../components';
import { colors } from '../../../../styles';
import s from './styles';

const Votes = ({ positive, negative, count }) => (
  <View style={s.votes}>
    <Touchable
      useOpacity
      borderless
      onPress={() => {}}
    >
      <Ionicons
        color={positive
            ? colors.votes.buttonActive
            : colors.votes.button
          }
        size={28}
        name="ios-arrow-dropup-circle"
      />
    </Touchable>
    <Text style={s.count}>{count}</Text>
    <Touchable
      useOpacity
      borderless
      onPress={() => {}}
    >
      <Ionicons
        color={negative
            ? colors.votes.buttonActive
            : colors.votes.button
          }
        size={28}
        name="ios-arrow-dropdown-circle"
      />
    </Touchable>
  </View>
);

Votes.propTypes = {
  positive: T.bool,
  negative: T.bool,
  count: T.number,
};

export default Votes;
