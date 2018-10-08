import React from 'react';
import { View, Text } from 'react-native';
// import T from 'prop-types';
import { DrawerButton, Logo } from '../../components';
import { headerStyles } from '../../styles';
// import s from './styles';

const AboutUsScreenView = () => (
  <View>
    <Text>AboutUs</Text>
  </View>
);
AboutUsScreenView.propTypes = {
};

AboutUsScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default AboutUsScreenView;
