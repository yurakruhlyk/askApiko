import { createAction } from 'redux-actions';
import types from './types';

export const addUser = createAction(types.SET_USER);
