import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { Tags } from '../../../../components';
import { Votes, AuthorDetail } from '../';
import s from './styles';

const QuestionDetail = ({
  title,
  description,
  tags,
  createdAt,
}) => (
  <View>
    <View style={s.header}>
      <Votes positive count={55} />
      <View style={s.infoContainer}>
        <Text style={s.title}>{title}</Text>
        <Tags tags={tags} />
      </View>
    </View>
    <View style={s.descriptionContainer}>
      <Text style={s.descriptionText}>{description}</Text>
    </View>
    <AuthorDetail asked date={createdAt} />
  </View>
);

QuestionDetail.propTypes = {
  title: T.string,
  description: T.string,
  createdAt: T.string,
  tags: T.array,
};

export default QuestionDetail;
