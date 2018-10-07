import R from 'ramda';
import { handleActions, combineActions } from 'redux-actions';
import types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isAnswersLoading: false,
  isAnswersLoadingError: null,
  countAllAnswersByQuestion: 0,

  isAnswersLoadingMore: false,
  isAnswersLoadingMoreError: null,

  isAnswersRefreshing: false,
  isAnswersHasNoMore: false,

  answersIds: {
    // questionId: [answersIds]
  },
  answersEntities: {
    // answerId: {answerData}
  },
};

export default handleActions(
  {
    [types.GET_ANSWERS_BY_QUESTION_ID_START]: mergeDeep(({ payload }) => ({
      isAnswersLoading: true,
      isAnswersRefreshing: payload,
    })),
    [types.GET_ANSWERS_BY_QUESTION_ID_SUCCESS]: mergeDeep(({ payload }) => ({
      isAnswersLoading: false,
      isAnswersLoadingError: null,
      isAnswersHasNoMore: false,
      isAnswersRefreshing: false,
      countAllAnswersByQuestion: payload.countAllAnswersByQuestion,

      answersIds: { [payload.questionId]: payload.answersIds },
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
      isAnswersHasNoMore: payload.hasNoMore,

      answersIds: {
        [payload.questionId]: R.uniq([
          ...state.answersIds[payload.questionId],
          ...payload.answersIds,
        ]),
      },
      answersEntities: payload.answersEntities,
    })),
    [types.GET_ANSWERS_BY_QUESTION_ID_MORE_ERROR]: mergeDeep(({ payload }) => ({
      isAnswersLoadingMore: false,
      isAnswersLoadingMoreError: payload,
    })),

    [types.SEND_ANSWER_TO_QUESTION_START]: mergeDeep(({ payload }, state) => ({
      countAllAnswersByQuestion: state.countAllAnswersByQuestion + 1,

      answersIds: {
        [payload.questionId]: [
          ...state.answersIds[payload.questionId],
          payload.answerId,
        ],
      },
      answersEntities: payload.answer,
    })),
    [combineActions(
      types.SEND_ANSWER_TO_QUESTION_SUCCESS,
      types.RETRY_SEND_ANSWER_TO_QUESTION_SUCCESS
    )]: mergeDeep(({ payload }, state) => ({
      answersIds: {
        [payload.questionId]: R.without(
          [payload.answerId],
          [
            ...state.answersIds[payload.questionId],
            payload.answer._id,
          ],
        ),
      },
      answersEntities: { [payload.answer._id]: payload.answer },
    })),
    [types.SEND_ANSWER_TO_QUESTION_ERROR]: mergeDeep(({ payload }) => ({
      answersEntities: {
        [payload.answerId]: {
          isLoading: false,
          isError: true,
        },
      },
    })),

    [types.RETRY_SEND_ANSWER_TO_QUESTION_START]: mergeDeep(({ payload }) => ({
      answersEntities: {
        [payload.answerId]: {
          isLoading: true,
          isError: false,
        },
      },
    })),
    [types.RETRY_SEND_ANSWER_TO_QUESTION_ERROR]: mergeDeep(({ payload }) => ({
      answersEntities: {
        [payload.answerId]: {
          isLoading: false,
          isError: true,
        },
      },
    })),
  },
  INITIAL_STATE,
);
