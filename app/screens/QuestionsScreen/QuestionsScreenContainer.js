import * as R from 'ramda';
import {
  compose,
  hoistStatics,
  withProps,
  lifecycle,
  pure,
} from 'recompose';
import { connect } from 'react-redux';
import { questionsOperations, questionsSelectors } from '../../modules/questions';
import QuestionsScreenView from './QuestionsScreenView';
import { AlertService } from '../../services';

const mapStateToProps = state => ({
  isLoading: questionsSelectors.getQuestionsLoadingState(state),
  questions: questionsSelectors.getQuestionsList(state),
});

const mapDispatchToProps = {
  getQuestions: questionsOperations.getQuestions,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withProps(props => ({
    isLoading: props.isLoading && R.isEmpty(props.questions),
  })),

  lifecycle({
    async componentDidMount() {
      try {
        await this.props.getQuestions();
      } catch (err) {
        AlertService.showErrorAlert(err.message);
      }
    },
  }),

  pure
);

export default hoistStatics(enhancer)(QuestionsScreenView);
