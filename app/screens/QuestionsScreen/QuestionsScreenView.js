import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { globalStyles } from '../../styles';
import s from './styles';

const QuestionsScreenView = ({
  navigateToQuestion,
  navigateToAuthorizedApp,
  navigateToUnauthorizedApp,
}) => (
  <View>
    <Text style={globalStyles.withMarginBottom}>Questions Page</Text>
    <Text style={globalStyles.withMarginBottom} onPress={navigateToQuestion}>
      Click for go to Question screen
    </Text>
    <Text style={globalStyles.withMarginBottom} onPress={navigateToAuthorizedApp}>
      Click for Sign In
    </Text>
    <Text onPress={navigateToUnauthorizedApp}>Click for Sign out</Text>
  </View>
);
QuestionsScreenView.propTypes = {
  navigateToQuestion: T.func,
  navigateToAuthorizedApp: T.func,
  navigateToUnauthorizedApp: T.func,
};

QuestionsScreenView.navigationOptions = ({ navigation }) => ({});

export default QuestionsScreenView;
