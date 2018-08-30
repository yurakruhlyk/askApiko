import { compose, hoistStatics, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import screens from '../../constants/screens';
import SignUpScreenView from './SignUpScreenView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    navigateToSignIn: ({ navigation }) => () => navigation.navigate(screens.SignIn),
  })
);

export default hoistStatics(enhancer)(SignUpScreenView);
