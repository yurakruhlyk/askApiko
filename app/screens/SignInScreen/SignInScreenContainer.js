import { compose, hoistStatics, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import screens from '../../constants/screens';
import SignInScreenView from './SignInScreenView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    navigateToRestorePassword: ({ navigation }) => () =>
      navigation.navigate(screens.RestorePassword),
  })
);

export default hoistStatics(enhancer)(SignInScreenView);
