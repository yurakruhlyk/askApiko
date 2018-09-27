import { compose, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import { withNavParams } from '../../utils/enhancers';
import { questionsSelectors } from '../../modules/questions';
import QuestionScreenView from './QuestionScreenView';

const mapStateToProps = (state, props) => ({
  question: questionsSelectors.getQuestionById(state, props.id),
  answersCount: 100,
});

const mapDispatchToProps = {
};

const enhancer = compose(
  withNavParams(['id']),

  connect(mapStateToProps, mapDispatchToProps),
);

export default hoistStatics(enhancer)(QuestionScreenView);
