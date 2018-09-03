
import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  signedIn: false,
  
  isSigningUp: false,
  isSignUpError: null,
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
      isSignUpError: payload.message,
    })),
  },
  INITIAL_STATE,
);
