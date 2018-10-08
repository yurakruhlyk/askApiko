import { createSelector } from 'reselect';
import R from 'ramda';

export const getUserState = createSelector(
  R.path(['user']),
  state => state,
);

export default {
  getUserState,
};
