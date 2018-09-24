import R from 'ramda';

export const getErrMessage = err => R.pathOr(
  R.is(String, err) ? err : 'Something went wrong',
  ['response', 'data', 'message'],
  err
);
