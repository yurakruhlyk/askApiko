import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import {
  DrawerButton,
  Logo,
  PageTitle,
} from '../../components';
import { ProfileDetails } from './components';
import { headerStyles } from '../../styles';
import s from './styles';

const ProfileScreenView = ({ user }) => (
  <View style={s.root}>
    <PageTitle
      title="Profile"
      style={s.pageTitle}
    />
    <ProfileDetails
      fullName={user.profile.fullName}
      email={user.email}
    />
    <Text style={s.listTitle}>Posted questions</Text>
  </View>
);

ProfileScreenView.propTypes = {
  user: T.object,
};

ProfileScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default ProfileScreenView;
