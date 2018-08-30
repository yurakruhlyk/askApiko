import { compose, hoistStatics, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import screens from '../../constants/screens';
import QuestionsScreenView from './QuestionsScreenView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    navigateToQuestion: ({ navigation }) => () => navigation.navigate(screens.Question),
    navigateToAuthorizedApp: ({ navigation }) => () =>
      navigation.navigate(screens.AuthorizedApp),
  })
);

export default hoistStatics(enhancer)(QuestionsScreenView);
