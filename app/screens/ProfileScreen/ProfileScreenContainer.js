import { compose, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ProfileScreenView from './ProfileScreenView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
);

export default hoistStatics(enhancer)(ProfileScreenView);
