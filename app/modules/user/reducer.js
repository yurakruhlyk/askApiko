import { handleActions } from 'redux-actions';
import types from './types';
import authTypes from '../auth/types';
import { mergeDeep, mergeIn } from '../../utils/stateHelper';

const INITIAL_STATE = {
  _id: '',
  email: '',
  profile: {
    fullName: '',
  },

};

export default handleActions(
  {
    [types.SET_USER]: mergeDeep(({ payload }) => ({
      ...payload,
    })),
    [authTypes.SIGN_OUT]: mergeIn(INITIAL_STATE),
  },
  INITIAL_STATE,
);
