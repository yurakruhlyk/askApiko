import {
  getAnswersByQuestionIdStart,
  getAnswersByQuestionIdSuccess,
  getAnswersByQuestionIdError,

  getAnswersByQuestionIdMoreStart,
  getAnswersByQuestionIdMoreSuccess,
  getAnswersByQuestionIdMoreError,
} from './actions';
import Api from '../../api';
import { answersSelectors } from './';
import { normalize } from '../../utils/stateHelper';
import { getErrMessage } from '../../utils/errorHelper';

const getAnswersByQuestionId = id => async dispatch => {
  try {
    dispatch(getAnswersByQuestionIdStart());

    const res = await Api.getAnswersByQuestionId(id);
    const payload = normalize(res.data.answers, 'answersIds', 'answersEntities');
    const countAllAnswersByQuestion = res.data.count;

    dispatch(getAnswersByQuestionIdSuccess({ ...payload, id, countAllAnswersByQuestion }));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(getAnswersByQuestionIdError(errMessage));
    throw new Error(errMessage);
  }
};

const getAnswersByQuestionIdMore = id => async (dispatch, getState) => {
  try {
    const isLoading = answersSelectors.getAnswersLoadingState(getState());
    const isLoadingMore = answersSelectors.getAnswersLoadingMoreState(getState());
    const hasNoMore = answersSelectors.getAnswersHasNoMoreState(getState());
    const count = answersSelectors.getAnswersCount(getState(), id);
    const limit = 10;

    if (isLoading || isLoadingMore || hasNoMore) {
      return;
    }

    dispatch(getAnswersByQuestionIdMoreStart());

    const res = await Api.getAnswersByQuestionId(id, limit, count);
    const payload = normalize(res.data.answers, 'answersIds', 'answersEntities');

    dispatch(getAnswersByQuestionIdMoreSuccess({
      ...payload,
      id,
      hasNoMore: payload.answersIds.length < limit,
    }));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(getAnswersByQuestionIdMoreError(errMessage));
    throw new Error(errMessage);
  }
};


export default {
  getAnswersByQuestionId,
  getAnswersByQuestionIdMore,
};
