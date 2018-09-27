import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { Logo } from '../../components';
import { QuestionDetail, AnswersList } from './components';
import { headerStyles } from '../../styles';
import s from './styles';

const QuestionScreenView = ({ question, answers, answersCount }) => (
  <View style={s.root}>
    <QuestionDetail
      title={question.title}
      description={question.description}
      createdAt={question.createdAt}
      tags={question.tags}
    />
    {/*<AnswersList count={answersCount} answers={answers} />*/}
  </View>
);
QuestionScreenView.propTypes = {
  question: T.object,
  answers: T.array,
  answersCount: T.number,
};

QuestionScreenView.navigationOptions = {
  headerTitle: <Logo header />,
  headerRight: <View />,
  ...headerStyles,
};

export default QuestionScreenView;
