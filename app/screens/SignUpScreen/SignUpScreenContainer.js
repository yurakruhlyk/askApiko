import {
  compose,
  hoistStatics,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import screens from '../../constants/screens';
import { isValidEmail, isValidPassword, trim } from '../../utils/textValidationHelper';
import SignUpScreenView from './SignUpScreenView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),

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
        isValidPassword(trim(password))
      );

      onChange('isValid', isValid);
    }
  ),

  withHandlers({
    navigateToSignIn: ({ navigation }) => () => navigation.navigate(screens.AuthorizedApp),
  })
);

export default hoistStatics(enhancer)(SignUpScreenView);
