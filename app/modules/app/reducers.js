import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const initialState = {
  initialized: false,
};

export default handleActions(
  {
    [types.INITIALIZED]: mergeDeep({ initialized: true }),
  },
  initialState
);
