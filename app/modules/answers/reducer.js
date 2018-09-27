import { handleActions } from 'redux-actions';
import types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isAnswersLoading: false,
  isAnswersLoadingError: null,
  countAllAnswersByQuestion: 0,

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
      countAllAnswersByQuestion: payload.countAllAnswersByQuestion,

      answersIds: { [payload.id]: payload.answersIds },
      answersEntities: payload.answersEntities,
    })),
    [types.GET_ANSWERS_BY_QUESTION_ID_ERROR]: mergeDeep(({ payload }) => ({
      isAnswersLoading: false,
      isAnswersLoadingError: payload,
    })),
  },
  INITIAL_STATE,
);
