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
  sendAnswerToQuestion,
}) => (
  <View style={s.root}>
    <FlatList
      data={answers}
      keyExtractor={R.prop('_id')}
      contentContainerStyle={[
        R.isEmpty(answers) && s.containerCenter,
      ]}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) =>
        <AnswerItem {...item} />
      }
      onEndReachedThreshold={0.7}
      onEndReached={getAnswersMore}
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
        isLoading ? <RootSpinner /> : <Text>Empty</Text>
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
  sendAnswerToQuestion: T.func,
};

QuestionScreenView.navigationOptions = {
  headerTitle: <Logo header />,
  headerRight: <View />,
  ...headerStyles,
};

export default QuestionScreenView;
