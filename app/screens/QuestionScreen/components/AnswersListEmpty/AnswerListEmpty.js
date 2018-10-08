import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { RootSpinner } from '../../../../components';
import s from './styles';

const AnswerListEmpty = ({ isLoading }) => (
  <View style={s.container}>
    {
    isLoading
    ? <RootSpinner />
    : <Text style={s.text}>There are no answers</Text>
    }
  </View>
);

AnswerListEmpty.propTypes = {
  isLoading: T.bool,
};

export default AnswerListEmpty;
