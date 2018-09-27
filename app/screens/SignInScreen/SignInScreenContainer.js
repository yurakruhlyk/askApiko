import {
  compose,
  hoistStatics,
  withStateHandlers,
  withHandlers,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../modules/auth';
import {
  isValidEmail,
  isValidPassword,
  trim,
} from '../../utils/textValidationHelper';
import { AlertService } from '../../services';
import { withLoadingModal } from '../../utils/enhancers';
import screens from '../../constants/screens';
import SignInScreenView from './SignInScreenView';

const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningInState(state),

});

const mapDispatchToProps = {
  signIn: authOperations.signIn,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withLoadingModal.stateProp('isLoading', 'Sign In'),

  withStateHandlers({
    email: '',
    password: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),

  withPropsOnChange(
    ['email', 'password'],
    ({
      email,
      password,
      onChange,
    }) => {
      const isValid = (
        isValidEmail(trim(email)) &&
        isValidPassword(password)
      );

      onChange('isValid', isValid);
    }
  ),

  withHandlers({
    navigateToRestorePassword: ({ navigation }) => () =>
      navigation.navigate(screens.RestorePassword),

    onSubmit: props => async () => {
      if (props.isValid) {
        try {
          await props.signIn(props.email, props.password);

          props.navigation.navigate(screens.AuthorizedApp);
        } catch (err) {
          AlertService.showErrorAlertWithTimeout(err.message);
        }
      }
    },
  })
);

export default hoistStatics(enhancer)(SignInScreenView);
