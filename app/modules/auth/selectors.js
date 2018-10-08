import { createSelector } from 'reselect';
import R from 'ramda';

const getSignedIn = createSelector(
  R.pathOr(false, ['auth', 'signedIn']),
  state => state,
);

const getSigningUp = createSelector(
  R.pathOr(false, ['auth', 'isSigningUp']),
  state => state,
);

const getSigningIn = createSelector(
  R.pathOr(false, ['auth', 'isSigningIn']),
  state => state,
);


export default {
  getSignedIn,
  getSigningUp,
  getSigningIn,
};
