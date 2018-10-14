import { compose, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ProfileScreenView from './ProfileScreenView';
import { userSelectors } from '../../modules/user';

const mapStateToProps = state => ({
  user: userSelectors.getUserState(state),
});

const enhancer = compose(
  connect(mapStateToProps),
);

export default hoistStatics(enhancer)(ProfileScreenView);
