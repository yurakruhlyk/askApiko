import { createAction } from 'redux-actions';
import types from './types';

export const getAnswersByQuestionIdStart = createAction(types.GET_ANSWERS_BY_QUESTION_ID_START);
export const getAnswersByQuestionIdSuccess = createAction(types.GET_ANSWERS_BY_QUESTION_ID_SUCCESS);
export const getAnswersByQuestionIdError = createAction(types.GET_ANSWERS_BY_QUESTION_ID_ERROR);

export const getAnswersByQuestionIdMoreStart = createAction(
  types.GET_ANSWERS_BY_QUESTION_ID_MORE_START,
);
export const getAnswersByQuestionIdMoreSuccess = createAction(
  types.GET_ANSWERS_BY_QUESTION_ID_MORE_SUCCESS,
);
export const getAnswersByQuestionIdMoreError = createAction(
  types.GET_ANSWERS_BY_QUESTION_ID_MORE_ERROR,
);
