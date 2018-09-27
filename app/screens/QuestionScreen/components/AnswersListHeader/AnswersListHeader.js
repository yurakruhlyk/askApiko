import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { TextLink } from '../../../../components';
import s from './styles';

const AnswersListHeader = ({ count }) => (
  <View style={s.root}>
    <Text style={s.count}>{count} Answers</Text>
    <View style={s.orderBy}>
      <Text style={s.orderByTitle}>order by</Text>
      <TextLink
        style={s.orderByValue}
        title="votes"
        onPress={() => {}}
      />
    </View>
  </View>
);

AnswersListHeader.propTypes = {
  count: T.number,
};

export default AnswersListHeader;
