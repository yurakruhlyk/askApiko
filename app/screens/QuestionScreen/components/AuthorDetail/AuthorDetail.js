import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import moment from 'moment';
import { Avatar } from '../../../../components';
import s from './styles';

import mockAvatar from '../../../../../assets/images/avatar.png';

const authorDetails = ({ asked, date }) => (
  <View style={s.root}>
    <View style={s.authorDetails}>
      <Avatar source={mockAvatar} author />
      <Text style={s.fullName}>James Dove</Text>
    </View>
    <View style={s.userActionDetails}>
      <Text style={s.typeAction}>{
        asked
        ? 'asked'
        : 'answered'
      }
      </Text>
      <Text style={s.time}>{moment(date).fromNow()}</Text>
    </View>
  </View>
);

authorDetails.propTypes = {
  asked: T.bool,
  date: T.string,
};

export default authorDetails;
