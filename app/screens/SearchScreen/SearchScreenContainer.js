import { compose, hoistStatics } from 'recompose';
// import { connect } from 'react-redux';
import SearchScreenView from './SearchScreenView';

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = {
// };

const enhancer = compose(
  // connect(mapStateToProps, mapDispatchToProps),
);

export default hoistStatics(enhancer)(SearchScreenView);
