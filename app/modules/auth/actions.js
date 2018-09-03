import { createAction } from 'redux-actions';
import * as types from './types';

export const signUpStart = createAction(types.SIGN_UP_START);
export const signUpSuccess = createAction(types.SIGN_UP_SUCCESS);
export const signUpError = createAction(types.SIGN_UP_ERROR);
