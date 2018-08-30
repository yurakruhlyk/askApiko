import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { headerStyles } from '../../styles';
import s from './styles';

const QuestionsScreenView = () => (
  <View>
    <Text>Question Page</Text>
  </View>
);
QuestionsScreenView.propTypes = {
};

QuestionsScreenView.navigationOptions = ({ navigation }) => ({
  ...headerStyles,
});

export default QuestionsScreenView;
