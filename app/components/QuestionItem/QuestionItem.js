import React from 'react';
import { pure } from 'recompose';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { Touchable, Tags } from '../';
import s from './styles';
import { colors } from '../../styles';

const QuestionItem = ({
  title,
  tags,
  createdAt,
  // onPress,
}) => (
  <Touchable onPress={() => {}}>
    <View style={s.container}>
      <View style={s.statusContainer}>
        <Text style={s.votes}>273</Text>
        <Ionicons
          name="md-checkmark-circle-outline"
          color={colors.questionItem.icon}
          size={18}
        />
      </View>
      <View style={s.infoContainer}>
        <Text style={s.title}>{title}</Text>
        <Tags tags={tags} />
        <View style={s.details}>
          <Text style={s.date}>asked {moment(createdAt).fromNow()}  by</Text>
          <Text style={s.author} onPress={() => {}}>
            shiva kumar
          </Text>
        </View>
      </View>
    </View>
  </Touchable>
);

QuestionItem.propTypes = {
  _id: T.string,
  title: T.string,
  tags: T.array,
  createdAt: T.string,
  // onPress: T.func,
};

export default pure(QuestionItem);
