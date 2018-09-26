import { handleActions } from 'redux-actions';
import types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isQuestionsLoading: false,
  isQuestionsLoadingError: null,

  questionsIds: [],
  questionsEntities: {},
};

export default handleActions(
  {
    [types.GET_QUESTIONS_START]: mergeDeep({
      isQuestionsLoading: true,
    }),
    [types.GET_QUESTIONS_SUCCESS]: mergeDeep(({ payload }) => ({
      isQuestionsLoading: false,
      isQuestionsLoadingError: null,

      questionsIds: payload.questionsIds,
      questionsEntities: payload.questionsEntities,
    })),
    [types.GET_QUESTIONS_ERROR]: mergeDeep(({ payload }) => ({
      isQuestionsLoading: false,
      isQuestionsLoadingError: payload,
    })),
  },
  INITIAL_STATE,
);
