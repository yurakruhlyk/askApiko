import * as R from 'ramda';
import {
  compose,
  hoistStatics,
  withStateHandlers,
  withProps,
  withHandlers,
  withPropsOnChange,
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
import { trim } from '../../utils/textValidationHelper';
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
    {
      message: '',
      isValidMessage: false,
    },
    {
      onChange: () => (field, value) => ({ [field]: value }),
    }),

  withProps(props => ({
    isLoading: props.isLoading && R.isEmpty(props.answers),
  })),

  withHandlers({
    onChangeMessage: props => (message) => props.onChange('message', message),
  }),

  withHandlers({
    getAnswersMore: props => async () => {
      try {
        await props.getAnswersMore(props.id);
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },

    sendAnswerToQuestion: props => async () => {
      try {
        await props.sendAnswerToQuestion(props.id, props.message);
        props.onChangeMessage('');
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

  withPropsOnChange(
    ['message'],
    ({ message, onChange }) => {
      const isValidMessage = trim(message).length > 0;

      onChange('isValidMessage', isValidMessage);
    }
  ),

  lifecycle({
    async componentDidMount() {
      try {
        await this.props.getAnswers(this.props.id);
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },
  }),

  pure
);

export default hoistStatics(enhancer)(QuestionScreenView);
