import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { DrawerButton, Logo } from '../../components';
import { headerStyles } from '../../styles';
import s from './styles';

const CreateQuestionScreenView = () => (
  <View>
    <Text>CreateQuestionScreenView</Text>
  </View>
);
CreateQuestionScreenView.propTypes = {
};

CreateQuestionScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  ...headerStyles,
});

export default CreateQuestionScreenView;
