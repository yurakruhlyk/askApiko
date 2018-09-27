import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { AnswersListHeader } from '../../components';
import s from './styles';

const AnswersList = ({ count }) => (
  <View style={s.root}>
    <AnswersListHeader count={count} />
  </View>
);

AnswersList.propTypes = {
  count: T.number,
};

export default AnswersList;
