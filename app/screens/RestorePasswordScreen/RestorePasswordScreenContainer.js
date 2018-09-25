import {
  compose,
  hoistStatics, withHandlers,
  withPropsOnChange,
  withStateHandlers,
} from 'recompose';
// import { connect } from 'react-redux';
import RestorePasswordScreenView from './RestorePasswordScreenView';
import { isValidEmail, trim } from '../../utils/textValidationHelper';

// const mapStateToProps = state => ({
// });
//
// const mapDispatchToProps = {
// };

const enhancer = compose(
  // connect(mapStateToProps, mapDispatchToProps),

  withStateHandlers({
    email: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),

  withPropsOnChange(
    ['email'],
    ({
      email,
      onChange,
    }) => {
      const isValid = isValidEmail(trim(email));

      onChange('isValid', isValid);
    }
  ),

  withHandlers({
    onSubmit: props => () => {
      if (props.isValid) {
        console.log(props.email);
      }
    },
  })
);

export default hoistStatics(enhancer)(RestorePasswordScreenView);
