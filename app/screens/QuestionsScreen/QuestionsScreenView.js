import * as R from 'ramda';
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import T from 'prop-types';
import {
  DrawerButton,
  Logo,
  PageTitle,
  Separator,
  RootSpinner,
  Spinner,
  QuestionItem,
} from '../../components';
import { headerStyles } from '../../styles';
import s from './styles';

const QuestionsScreenView = ({
  questions,
  isLoading,
  isLoadingMore,
  isRefreshing,
  getQuestionsMore,
  onRefreshQuestions,
}) => (
  <View style={s.root}>
    <PageTitle
      title="User questions"
      style={s.pageTitle}
    />
    <FlatList
      data={questions}
      keyExtractor={R.prop('_id')}
      contentContainerStyle={R.isEmpty(questions) && s.containerCenter}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <QuestionItem {...item} />}
      onEndReachedThreshold={0.7}
      onEndReached={getQuestionsMore}
      refreshing={isRefreshing}
      onRefresh={onRefreshQuestions}
      ListEmptyComponent={
        isLoading ? <RootSpinner /> : <Text>Empty</Text>
      }
      ListFooterComponent={isLoadingMore && <Spinner />}
    />
  </View>
);

QuestionsScreenView.propTypes = {
  questions: T.array,
  isLoading: T.bool,
  isLoadingMore: T.bool,
  isRefreshing: T.bool,
  getQuestionsMore: T.func,
  onRefreshQuestions: T.func,
};

QuestionsScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default QuestionsScreenView;
