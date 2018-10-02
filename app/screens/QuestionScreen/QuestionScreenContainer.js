import * as R from 'ramda';
import {
  compose,
  hoistStatics,
  withProps,
  withHandlers,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { withNavParams } from '../../utils/enhancers';
import { questionsSelectors } from '../../modules/questions';
import { answersSelectors, answersOperations } from '../../modules/answers';
import { authSelectors } from '../../modules/auth';
import { AlertService } from '../../services';
import screens from '../../constants/screens';
import QuestionScreenView from './QuestionScreenView';

const mapStateToProps = (state, props) => ({
  isAuthorized: authSelectors.getSignedInState(state),
  isLoading: answersSelectors.getAnswersLoadingState(state),
  isLoadingMore: answersSelectors.getAnswersLoadingMoreState(state),
  question: questionsSelectors.getQuestionById(state, props.id),
  answers: answersSelectors.getAnswersByQuestionId(state, props.id),
  answersCount: answersSelectors.getCountAllAnswersByQuestionState(state),
});

const mapDispatchToProps = {
  getAnswers: answersOperations.getAnswersByQuestionId,
  getAnswersMore: answersOperations.getAnswersByQuestionIdMore,
};
const enhancer = compose(
  withNavParams(['id']),

  connect(mapStateToProps, mapDispatchToProps),

  withProps(props => ({
    isLoading: props.isLoading && R.isEmpty(props.answers),
  })),

  withHandlers({
    getAnswersMore: props => async () => {
      try {
        props.getAnswersMore(props.id);
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },

    navigateToSignUp: props => () => props.navigation.navigate(screens.SignUp),
  }),

  lifecycle({
    async componentDidMount() {
      try {
        this.props.getAnswers(this.props.id);
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },
  }),
);

export default hoistStatics(enhancer)(QuestionScreenView);
