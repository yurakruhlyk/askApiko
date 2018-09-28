import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Logo } from '../../components';
import { QuestionDetail, AnswersList } from './components';
import { headerStyles } from '../../styles';
import s from './styles';

const QuestionScreenView = ({
  question,
  answers,
  answersCount,
  isLoading,
  isLoadingMore,
  getAnswersMore,
}) => (
  <KeyboardAwareScrollView style={s.root}>
    <QuestionDetail
      title={question.title}
      description={question.description}
      createdAt={question.createdAt}
      tags={question.tags}
    />
    <AnswersList
      count={answersCount}
      answers={answers}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      getAnswersMore={getAnswersMore}
    />
  </KeyboardAwareScrollView>
);
QuestionScreenView.propTypes = {
  question: T.object,
  answers: T.array,
  answersCount: T.number,
  isLoading: T.bool,
  isLoadingMore: T.bool,
  getAnswersMore: T.func,
};

QuestionScreenView.navigationOptions = {
  headerTitle: <Logo header />,
  headerRight: <View />,
  ...headerStyles,
};

export default QuestionScreenView;
