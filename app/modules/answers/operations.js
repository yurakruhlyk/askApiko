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

  retrySendAnswerToQuestionStart,
  retrySendAnswerToQuestionSuccess,
  retrySendAnswerToQuestionError,
} from './actions';
import Api from '../../api';
import { answersSelectors } from './';
import { normalize } from '../../utils/stateHelper';
import { getErrMessage } from '../../utils/errorHelper';

const getAnswersByQuestionId = (questionId, refreshing = false) =>
  async (dispatch, getState) => {
    try {
      const hasAnswers = answersSelectors.getAnswersCount(getState(), questionId);

      if (hasAnswers && !refreshing) {
        return;
      }

      dispatch(getAnswersByQuestionIdStart(refreshing));

      const res = await Api.getAnswersByQuestionId(questionId);
      const payload = normalize(res.data.answers, 'answersIds', 'answersEntities');
      const countAllAnswersByQuestion = res.data.count;

      dispatch(getAnswersByQuestionIdSuccess({
        ...payload,
        questionId,
        countAllAnswersByQuestion,
      }));
    } catch (err) {
      const errMessage = getErrMessage(err);

      dispatch(getAnswersByQuestionIdError(errMessage));
      throw new Error(errMessage);
    }
  };

const getAnswersByQuestionIdMore = questionId => async (dispatch, getState) => {
  try {
    const isLoading = answersSelectors.getAnswersLoading(getState());
    const isLoadingMore = answersSelectors.getAnswersLoadingMore(getState());
    const hasNoMore = answersSelectors.getAnswersHasNoMore(getState());
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
    dispatch(sendAnswerToQuestionStart({
      questionId,
      answerId,
      answer: {
        [answerId]: {
          createdAt: date,
          _id: answerId,
          createdBy: '1', // TODO fix after add user to Redux
          description: message,
          questionId,
          isLoading: true,
          isError: null,
        },
      },
    }));

    const res = await Api.sendAnswerToQuestion(questionId, message);
    const { answer } = res.data;

    dispatch(sendAnswerToQuestionSuccess({ questionId, answerId, answer }));
  } catch (err) {
    dispatch(sendAnswerToQuestionError({ answerId }));
  }
};

const retrySendAnswerToQuestion = (answerId) => async (dispatch, getState) => {
  try {
    const {
      questionId,
      description: message,
    } = answersSelectors.getAnswerById(getState(), answerId);

    dispatch(retrySendAnswerToQuestionStart({ answerId }));

    const res = await Api.sendAnswerToQuestion(questionId, message);
    const { answer } = res.data;

    dispatch(retrySendAnswerToQuestionSuccess({ questionId, answerId, answer }));
  } catch (err) {
    dispatch(retrySendAnswerToQuestionError({ answerId }));
  }
};

export default {
  getAnswersByQuestionId,
  getAnswersByQuestionIdMore,
  sendAnswerToQuestion,
  retrySendAnswerToQuestion,
};
