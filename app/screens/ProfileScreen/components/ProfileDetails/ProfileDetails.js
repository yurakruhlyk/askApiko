import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Avatar } from '../../../../components';
import s from './styles';

import mockAvatar from '../../../../../assets/images/avatar.png';

const ProfileDetails = ({ fullName, email }) => (
  <View style={s.root}>
    <Avatar source={mockAvatar} profile />
    <View style={s.profileInfo}>
      <Text style={s.fullName}>{fullName}</Text>
      <Text style={s.email}>{email}</Text>
    </View>
  </View>
);

ProfileDetails.propTypes = {
  fullName: T.string,
  email: T.string,
};

export default ProfileDetails;
