import uuidv1 from 'uuid';
import {
  getAnswersByQuestionIdStart,
  getAnswersByQuestionIdSuccess,
  getAnswersByQuestionIdError,

  getAnswersByQuestionIdMoreStart,
  getAnswersByQuestionIdMoreSuccess,
  getAnswersByQuestionIdMoreError,

  sendAnswerToQuestionStart,
  sendAnswerToQuestionSuccess,
  sendAnswerToQuestionError,
} from './actions';
import Api from '../../api';
import { answersSelectors } from './';
import { normalize } from '../../utils/stateHelper';
import { getErrMessage } from '../../utils/errorHelper';

const getAnswersByQuestionId = questionId => async dispatch => {
  try {
    dispatch(getAnswersByQuestionIdStart());

    const res = await Api.getAnswersByQuestionId(questionId);
    const payload = normalize(res.data.answers, 'answersIds', 'answersEntities');
    const countAllAnswersByQuestion = res.data.count;

    dispatch(getAnswersByQuestionIdSuccess({ ...payload, questionId, countAllAnswersByQuestion }));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(getAnswersByQuestionIdError(errMessage));
    throw new Error(errMessage);
  }
};

const getAnswersByQuestionIdMore = questionId => async (dispatch, getState) => {
  try {
    const isLoading = answersSelectors.getAnswersLoadingState(getState());
    const isLoadingMore = answersSelectors.getAnswersLoadingMoreState(getState());
    const hasNoMore = answersSelectors.getAnswersHasNoMoreState(getState());
    const count = answersSelectors.getAnswersCount(getState(), questionId);
    const limit = 10;

    if (isLoading || isLoadingMore || hasNoMore) {
      return;
    }

    dispatch(getAnswersByQuestionIdMoreStart());

    const res = await Api.getAnswersByQuestionId(questionId, limit, count);
    const payload = normalize(res.data.answers, 'answersIds', 'answersEntities');

    dispatch(getAnswersByQuestionIdMoreSuccess({
      ...payload,
      questionId,
      hasNoMore: payload.answersIds.length < limit,
    }));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(getAnswersByQuestionIdMoreError(errMessage));
    throw new Error(errMessage);
  }
};

const sendAnswerToQuestion = (questionId, message) => async dispatch => {
  const answerId = uuidv1();
  const date = new Date().toISOString();

  try {
    // console.log({
    //   questionId,
    //   answerId,
    //   answerEntity: {
    //     [answerId]: {
    //       createdAt: date,
    //       _id: answerId,
    //       createdBy: 'userId',
    //       description: message,
    //       questionId,
    //       isLoading: true,
    //       isError: null,
    //     },
    //   },
    // });

    dispatch(sendAnswerToQuestionStart({
      questionId,
      answerId,
      answer: {
        [answerId]: {
          createdAt: date,
          _id: answerId,
          createdBy: 'userId', // TODO fix
          description: message,
          questionId,
          isLoading: true,
          isError: null,
        },
      },
    }));

    await Api.sendAnswerToQuestion(questionId, message);

    dispatch(sendAnswerToQuestionSuccess({ answerId }));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(sendAnswerToQuestionError({ answerId }));
    throw new Error(errMessage);
  }
};


export default {
  getAnswersByQuestionId,
  getAnswersByQuestionIdMore,
  sendAnswerToQuestion,
};
