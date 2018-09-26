import * as R from 'ramda';
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import T from 'prop-types';
import {
  DrawerButton,
  Logo,
  PageTitle,
  Separator,
  QuestionItem,
  RootSpinner,
} from '../../components';
import { headerStyles } from '../../styles';
import s from './styles';

const QuestionsScreenView = ({ questions, isLoading }) => (
  <View style={s.root}>
    <PageTitle
      title="User questions"
      style={s.pageTitle}
    />
    <FlatList
      data={questions}
      keyExtractor={R.prop('_id')}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <QuestionItem {...item} />}
      contentContainerStyle={questions.length === 0 && s.containerCenter}
      ListEmptyComponent={
        isLoading ? <RootSpinner /> : <Text>Empty</Text>
      }
    />
  </View>
);

QuestionsScreenView.propTypes = {
  questions: T.array,
  // navigateToQuestion: T.func,
};

QuestionsScreenView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Logo header />,
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  headerRight: <View />,
  ...headerStyles,
});

export default QuestionsScreenView;
