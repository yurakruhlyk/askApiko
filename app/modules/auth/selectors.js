import { createSelector } from 'reselect';
import R from 'ramda';

const getSignedInState = createSelector(
  R.pathOr(false, ['auth', 'signedIn']),
  state => state,
);

const getSigningUpState = createSelector(
  R.pathOr(false, ['auth', 'isSigningUp']),
  state => state,
);

const getSigningInState = createSelector(
  R.pathOr(false, ['auth', 'isSigningIn']),
  state => state,
);


export default {
  getSignedInState,
  getSigningUpState,
  getSigningInState,
};
