import { compose, hoistStatics } from 'recompose';
// import { connect } from 'react-redux';
import CreateQuestionScreenView from './CreateQuestionScreenView';

// const mapStateToProps = state => ({
// });
//
// const mapDispatchToProps = {
// };

const enhancer = compose(
  // connect(mapStateToProps, mapDispatchToProps),
);

export default hoistStatics(enhancer)(CreateQuestionScreenView);
