import {
  getQuestionsStart,
  getQuestionsSuccess,
  getQuestionsError,
} from './actions';
import questionsSelectors from './selectors';
import Api from '../../api';
import { normalize } from '../../utils/stateHelper';
import { getErrMessage } from '../../utils/errorHelper';

const getQuestions = () => async (dispatch, getState) => {
  try {
    const isFetching = questionsSelectors.getQuestionsLoadingState(getState());

    if (isFetching) {
      return;
    }

    dispatch(getQuestionsStart());

    const res = await Api.getQuestions();
    const payload = normalize(res.data.questions, 'questionsIds', 'questionsEntities');

    dispatch(getQuestionsSuccess(payload));
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(getQuestionsError(errMessage));
    throw new Error(errMessage);
  }
};

export default {
  getQuestions,
};

