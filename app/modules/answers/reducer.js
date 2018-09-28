import { handleActions } from 'redux-actions';
import types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isAnswersLoading: false,
  isAnswersLoadingError: null,
  countAllAnswersByQuestion: 0,

  isAnswersLoadingMore: false,
  isAnswersLoadingMoreError: null,
  isAnswersHasNoMore: false,

  answersIds: {},
  answersEntities: {},
};

export default handleActions(
  {
    [types.GET_ANSWERS_BY_QUESTION_ID_START]: mergeDeep({
      isAnswersLoading: true,
    }),
    [types.GET_ANSWERS_BY_QUESTION_ID_SUCCESS]: mergeDeep(({ payload }) => ({
      isAnswersLoading: false,
      isAnswersLoadingError: null,
      isAnswersHasNoMore: false,
      countAllAnswersByQuestion: payload.countAllAnswersByQuestion,

      answersIds: { [payload.id]: payload.answersIds },
      answersEntities: payload.answersEntities,
    })),
    [types.GET_ANSWERS_BY_QUESTION_ID_ERROR]: mergeDeep(({ payload }) => ({
      isAnswersLoading: false,
      isAnswersLoadingError: payload,
    })),

    [types.GET_ANSWERS_BY_QUESTION_ID_MORE_START]: mergeDeep({
      isAnswersLoadingMore: true,
    }),
    [types.GET_ANSWERS_BY_QUESTION_ID_MORE_SUCCESS]: mergeDeep(({ payload }, state) => ({
      isAnswersLoadingMore: false,
      isAnswersLoadingMoreError: null,

      answersIds: { [payload.id]: [...state.answersIds[payload.id], ...payload.answersIds] },
      answersEntities: payload.answersEntities,
      isAnswersHasNoMore: payload.hasNoMore,
    })),
    [types.GET_ANSWERS_BY_QUESTION_ID_MORE_ERROR]: mergeDeep(({ payload }) => ({
      isAnswersLoadingMore: false,
      isAnswersLoadingMoreError: payload,
    })),

  },
  INITIAL_STATE,
);
