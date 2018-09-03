import { createSelector } from 'reselect';
import R from 'ramda';

export const getSignedInState = createSelector(
  R.pathOr(false, ['auth', 'signedIn']),
  state => state,
);

export const getSigningUpState = createSelector(
  R.pathOr(false, ['auth', 'isSigningUp']),
  state => state,
);
