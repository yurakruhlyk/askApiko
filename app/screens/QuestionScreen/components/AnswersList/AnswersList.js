import * as R from 'ramda';
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import T from 'prop-types';
import { Separator, RootSpinner, Spinner } from '../../../../components';
import { AnswersListHeader, AnswerItem } from '../../components';
import s from './styles';

const AnswersList = ({
  count,
  answers,
  isLoading,
  getAnswersMore,
  isLoadingMore,
}) => (
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
      onEndReachedThreshold={0.7}
      onEndReached={getAnswersMore}
      ListEmptyComponent={
        isLoading ? <RootSpinner /> : <Text>Empty</Text>
      }
      ListFooterComponent={isLoadingMore && <Spinner />}
    />
  </View>
);

AnswersList.propTypes = {
  count: T.number,
  answers: T.array,
  isLoading: T.bool,
  getAnswersMore: T.func,
  isLoadingMore: T.bool,
};

export default AnswersList;
