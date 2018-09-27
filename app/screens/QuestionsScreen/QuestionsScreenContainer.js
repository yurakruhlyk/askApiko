import * as R from 'ramda';
import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  lifecycle,
  pure,
} from 'recompose';
import { connect } from 'react-redux';
import { questionsOperations, questionsSelectors } from '../../modules/questions';
import { AlertService } from '../../services';
import { onNavigate } from '../../utils/navHelpers';
import screens from '../../constants/screens';
import QuestionsScreenView from './QuestionsScreenView';

const mapStateToProps = state => ({
  isLoading: questionsSelectors.getQuestionsLoadingState(state),
  isLoadingMore: questionsSelectors.getQuestionsLoadingMoreState(state),
  isRefreshing: questionsSelectors.getQuestionsRefreshingState(state),
  questions: questionsSelectors.getQuestionsState(state),
});

const mapDispatchToProps = {
  getQuestions: questionsOperations.getQuestions,
  getQuestionsMore: questionsOperations.getQuestionsMore,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withProps(props => ({
    isLoading: props.isLoading && R.isEmpty(props.questions),
  })),

  withHandlers({
    navigateToQuestion: props => id =>
      onNavigate(props.navigation, screens.Question, { id }),

    getQuestionsMore: props => async () => {
      try {
        await props.getQuestionsMore();
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },

    onRefreshQuestions: props => async () => {
      try {
        await props.getQuestions(true);
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },
  }),

  lifecycle({
    async componentDidMount() {
      try {
        await this.props.getQuestions();
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },
  }),

  pure,
);

export default hoistStatics(enhancer)(QuestionsScreenView);
