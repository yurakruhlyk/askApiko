import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton, Logo } from '../../components';
import { globalStyles, headerStyles } from '../../styles';
import s from './styles';

const QuestionsScreenView = ({
  navigateToQuestion,
  navigateToAuthorizedApp,
}) => (
  <View>
    <Text style={globalStyles.withMarginBottom}>Questions Page</Text>
    <Text style={globalStyles.withMarginBottom} onPress={navigateToQuestion}>
      Click for go to Question screen
    </Text>
    <Text style={globalStyles.withMarginBottom} onPress={navigateToAuthorizedApp}>
      Click for Sign In
    </Text>
  </View>
);
QuestionsScreenView.propTypes = {
  navigateToQuestion: T.func,
  navigateToAuthorizedApp: T.func,
  navigateToUnauthorizedApp: T.func,
};

QuestionsScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default QuestionsScreenView;
