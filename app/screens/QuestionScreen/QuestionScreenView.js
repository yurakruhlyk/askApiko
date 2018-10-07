import * as R from 'ramda';
import React from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import T from 'prop-types';
import {
  Logo,
  RootSpinner,
  Separator,
  Spinner,
} from '../../components';
import {
  QuestionDetail,
  AnswersListHeader,
  AnswerItem,
  AnswersListFooter,
} from './components';
import { headerStyles } from '../../styles';
import s from './styles';

const QuestionScreenView = ({
  question,
  answers,
  answersCount,
  isAuthorized,
  isLoading,
  isLoadingMore,
  getAnswersMore,
  navigateToSignUp,
  onChangeMessage,
  message,
  sendAnswerToQuestion,
  retrySendAnswerToQuestion,
  isRefreshing,
  onRefreshAnswers,
  isValidMessage,
}) => (
  <View style={s.root}>
    <FlatList
      data={answers}
      keyExtractor={R.prop('_id')}
      contentContainerStyle={[
        R.isEmpty(answers) && s.containerCenter,
      ]}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <AnswerItem
          {...item}
          onRetrySendAnswerToQuestion={retrySendAnswerToQuestion}
        />
      )
      }
      onEndReachedThreshold={0.7}
      onEndReached={getAnswersMore}
      refreshing={isRefreshing}
      onRefresh={onRefreshAnswers}
      ListHeaderComponent={
        <View>
          <QuestionDetail
            title={question.title}
            description={question.description}
            createdAt={question.createdAt}
            tags={question.tags}
          />
          <AnswersListHeader count={answersCount} />
        </View>
      }
      ListEmptyComponent={
        isLoading
          ? <RootSpinner />
          : <Text>Empty</Text>
      }
      ListFooterComponent={
        isLoadingMore &&
        <View style={s.spinnerContainer}>
          <Spinner />
        </View>
      }
    />
    <AnswersListFooter
      isAuthorized={isAuthorized}
      navigateToSignUp={navigateToSignUp}
      sendAnswerToQuestion={sendAnswerToQuestion}
      onChangeMessage={onChangeMessage}
      message={message}
      isValidMessage={isValidMessage}
    />
  </View>
);
QuestionScreenView.propTypes = {
  question: T.object,
  answers: T.array,
  answersCount: T.number,
  isAuthorized: T.bool,
  isLoading: T.bool,
  isLoadingMore: T.bool,
  getAnswersMore: T.func,
  navigateToSignUp: T.func,
  onChangeMessage: T.func,
  message: T.string,
  sendAnswerToQuestion: T.func,
  retrySendAnswerToQuestion: T.func,
  isValidMessage: T.bool,
};

QuestionScreenView.navigationOptions = {
  headerTitle: <Logo header />,
  headerRight: <View />,
  ...headerStyles,
};

export default QuestionScreenView;
