import * as R from 'ramda';
import {
  compose,
  hoistStatics,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../modules/auth';
import { AlertService } from '../../services';
import { withLoadingModal } from '../../utils/enhancers';
import {
  isValidEmail,
  isValidPassword,
  trim,
} from '../../utils/textValidationHelper';
import screens from '../../constants/screens';
import SignUpScreenView from './SignUpScreenView';

const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningUpState(state),
});

const mapDispatchToProps = {
  signUp: authOperations.signUp,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withLoadingModal.stateProp('isLoading', 'Sign up'),

  withStateHandlers({
    username: '',
    email: '',
    password: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),

  withPropsOnChange(
    ['username', 'email', 'password'],
    ({
      username,
      email,
      password,
      onChange,
    }) => {
      const isValid = (
        trim(username).length > 0 &&
        isValidEmail(trim(email)) &&
        isValidPassword(password)
      );

      onChange('isValid', isValid);
    }
  ),

  withHandlers({
    navigateToSignIn: ({ navigation }) => () => navigation.navigate(screens.SignIn),
    onSubmit: props => async () => {
      if (props.isValid) {
        try {
          await props.signUp(R.pick(
            ['username', 'email', 'password'],
            props
          ));

          props.navigation.navigate(screens.AuthorizedApp);
        } catch (err) {
          AlertService.showErrorAlert(err.message);
        }
      }
    },
  })
  
);

export default hoistStatics(enhancer)(SignUpScreenView);
