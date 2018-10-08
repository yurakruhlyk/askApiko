import {
  getQuestionsStart,
  getQuestionsSuccess,
  getQuestionsError,
  getQuestionsMoreStart,
  getQuestionsMoreSuccess,
  getQuestionsMoreError,
} from './actions';
import questionsSelectors from './selectors';
import Api from '../../api';
import { normalize } from '../../utils/stateHelper';
import { getErrMessage } from '../../utils/errorHelper';

const getQuestions = (refreshing = false) => async (dispatch, getState) => {
  try {
    const isLoading = questionsSelectors.getQuestionsLoading(getState());

    if (isLoading) {
      return;
    }

    dispatch(getQuestionsStart(refreshing));

    const res = await Api.getQuestions();
    const payload = normalize(res.data.questions, 'questionsIds', 'questionsEntities');

    dispatch(getQuestionsSuccess(payload));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(getQuestionsError(errMessage));
    throw new Error(errMessage);
  }
};

export const getQuestionsMore = () => async (dispatch, getState) => {
  try {
    const isLoadingMore = questionsSelectors.getQuestionsLoadingMore(getState());
    const count = questionsSelectors.getQuestionsCount(getState());
    const hasNoMore = questionsSelectors.getQuestionsHasNoMore(getState());
    const limit = 10;

    if (isLoadingMore || hasNoMore) {
      return;
    }

    dispatch(getQuestionsMoreStart());

    const res = await Api.getQuestions(limit, count);
    const payload = normalize(res.data.questions, 'questionsIds', 'questionsEntities');

    dispatch(getQuestionsMoreSuccess({
      ...payload,
      hasNoMore: payload.questionsIds.length < limit,
    }));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(getQuestionsMoreError(errMessage));
    throw new Error(errMessage);
  }
};

export default {
  getQuestions,
  getQuestionsMore,
};

