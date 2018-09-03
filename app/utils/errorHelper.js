import R from 'ramda';
import { Alert } from 'react-native';

const getErrMessage = err => R.pathOr(
  R.is(String, err) ? err : 'Something went wrong',
  ['response', 'data', 'message'],
  err
);

const alertError = err => {
  Alert.alert(
    'Oops',
    getErrMessage(err),
    [{ text: 'OK' }],
  );
};

const alertErrorWithTimeout = err => {
  setTimeout(() => {
    Alert.alert(
      'Oops',
      getErrMessage(err),
      [{ text: 'OK' }],
    );
  }, 700);
};


export { getErrMessage, alertError, alertErrorWithTimeout };
