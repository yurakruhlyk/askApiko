import * as R from 'ramda';
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import T from 'prop-types';
import { Separator, RootSpinner } from '../../../../components';
import { AnswersListHeader, AnswerItem } from '../../components';
import s from './styles';

const AnswersList = ({ count, answers, isLoading }) => (
  <View>
    <AnswersListHeader count={count} />
    <FlatList
      data={answers}
      keyExtractor={R.prop('_id')}
      contentContainerStyle={R.isEmpty(answers) && s.containerCenter}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) =>
        <AnswerItem {...item} />
      }
      ListEmptyComponent={
        isLoading ? <RootSpinner /> : <Text>Empty</Text>
      }
    />
  </View>
);

AnswersList.propTypes = {
  count: T.number,
};

export default AnswersList;
