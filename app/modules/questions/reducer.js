import { handleActions } from 'redux-actions';
import types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isQuestionsLoading: false,
  isQuestionsLoadingError: null,

  isQuestionsLoadingMore: false,
  isQuestionsLoadingMoreError: null,

  isQuestionsHasNoMore: false,

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

    [types.GET_QUESTIONS_MORE_START]: mergeDeep({
      isQuestionsLoadingMore: true,
    }),
    [types.GET_QUESTIONS_MORE_SUCCESS]: mergeDeep(({ payload }, state) => ({
      isQuestionsLoadingMore: false,
      isQuestionsLoadingMoreError: null,
      isQuestionsHasNoMore: payload.hasNoMore,

      questionsIds: [...state.questionsIds, ...payload.questionsIds],
      questionsEntities: payload.questionsEntities,
    })),
    [types.GET_QUESTIONS_MORE_ERROR]: mergeDeep(({ payload }) => ({
      isQuestionsLoadingMore: false,
      isQuestionsLoadingMoreError: payload,
    })),
  },
  INITIAL_STATE,
);
