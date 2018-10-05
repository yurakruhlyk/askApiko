import * as R from 'ramda';
import {
  compose,
  hoistStatics,
  withStateHandlers,
  withProps,
  withHandlers,
  lifecycle,
  pure,
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
  isRefreshing: answersSelectors.getAnswersRefreshingState(state),
  isLoadingMore: answersSelectors.getAnswersLoadingMoreState(state),
  question: questionsSelectors.getQuestionById(state, props.id),
  answers: answersSelectors.getAnswersByQuestionId(state, props.id),
  answersCount: answersSelectors.getCountAllAnswersByQuestionState(state),
});

const mapDispatchToProps = {
  getAnswers: answersOperations.getAnswersByQuestionId,
  getAnswersMore: answersOperations.getAnswersByQuestionIdMore,
  sendAnswerToQuestion: answersOperations.sendAnswerToQuestion,
};
const enhancer = compose(
  withNavParams(['id']),

  connect(mapStateToProps, mapDispatchToProps),

  withStateHandlers(
    { message: '' },
    {
      onChangeMessage: () => (message) => ({ message }),
    }),

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

    sendAnswerToQuestion: props => async () => {
      try {
        props.sendAnswerToQuestion(props.id, props.message);
      } catch (err) {
        console.log(err.message);
        AlertService.showErrorAlert(err.message);
      }
    },

    navigateToSignUp: props => () => props.navigation.navigate(screens.SignUp),

    onRefreshAnswers: props => async () => {
      try {
        await props.getAnswers(props.id, true);
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },
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

  pure,
);

export default hoistStatics(enhancer)(QuestionScreenView);
