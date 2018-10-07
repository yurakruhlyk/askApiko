import { createAction } from 'redux-actions';
import types from './types';

export const getAnswersByQuestionIdStart =
  createAction(types.GET_ANSWERS_BY_QUESTION_ID_START);
export const getAnswersByQuestionIdSuccess =
  createAction(types.GET_ANSWERS_BY_QUESTION_ID_SUCCESS);
export const getAnswersByQuestionIdError =
  createAction(types.GET_ANSWERS_BY_QUESTION_ID_ERROR);

export const getAnswersByQuestionIdMoreStart = createAction(
  types.GET_ANSWERS_BY_QUESTION_ID_MORE_START,
);
export const getAnswersByQuestionIdMoreSuccess = createAction(
  types.GET_ANSWERS_BY_QUESTION_ID_MORE_SUCCESS,
);
export const getAnswersByQuestionIdMoreError = createAction(
  types.GET_ANSWERS_BY_QUESTION_ID_MORE_ERROR,
);

export const sendAnswerToQuestionStart = createAction(types.SEND_ANSWER_TO_QUESTION_START);
export const sendAnswerToQuestionSuccess = createAction(types.SEND_ANSWER_TO_QUESTION_SUCCESS);
export const sendAnswerToQuestionError = createAction(types.SEND_ANSWER_TO_QUESTION_ERROR);

export const retrySendAnswerToQuestionStart =
  createAction(types.RETRY_SEND_ANSWER_TO_QUESTION_START);
export const retrySendAnswerToQuestionSuccess =
  createAction(types.RETRY_SEND_ANSWER_TO_QUESTION_SUCCESS);
export const retrySendAnswerToQuestionError =
  createAction(types.RETRY_SEND_ANSWER_TO_QUESTION_ERROR);
