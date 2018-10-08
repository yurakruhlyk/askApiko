import { handleActions } from 'redux-actions';
import types from './types';
import { appTypes } from '../app/';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  signedIn: false,

  isSigningUp: false,
  isSignUpError: null,

  isSigningIn: false,
  isSignInError: null,
};

export default handleActions(
  {
    [types.SIGN_UP_START]: mergeDeep({ isSigningUp: true }),
    [types.SIGN_UP_SUCCESS]: mergeDeep({
      isSigningUp: false,
      signedIn: true,
      isSignUpError: null,
    }),
    [types.SIGN_UP_ERROR]: mergeDeep(({ payload }) => ({
      isSigningUp: false,
      isSignUpError: payload,
    })),

    [types.SIGN_IN_START]: mergeDeep({ isSigningIn: true }),
    [appTypes.INITIALIZED]: mergeDeep({
      signedIn: true,
    }),
    [types.SIGN_IN_SUCCESS]: mergeDeep({
      isSigningIn: false,
      signedIn: true,
      isSignInError: null,
    }),
    [types.SIGN_IN_ERROR]: mergeDeep(({ payload }) => ({
      isSigningIn: false,
      isSignInError: payload,
    })),

    [types.SIGN_OUT]: mergeDeep({
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE,
);
