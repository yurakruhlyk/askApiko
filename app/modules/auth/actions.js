import { createAction } from 'redux-actions';
import types from './types';

export const signUpStart = createAction(types.SIGN_UP_START);
export const signUpSuccess = createAction(types.SIGN_UP_SUCCESS);
export const signUpError = createAction(types.SIGN_UP_ERROR);

export const signInStart = createAction(types.SIGN_IN_START);
export const signInSuccess = createAction(types.SIGN_IN_SUCCESS);
export const signInError = createAction(types.SIGN_IN_ERROR);

export const signOut = createAction(types.SIGN_OUT);
