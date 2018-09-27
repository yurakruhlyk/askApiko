import {
  getAnswersByQuestionIdStart,
  getAnswersByQuestionIdSuccess,
  getAnswersByQuestionIdError,
} from './actions';
import Api from '../../api';
// import { answersSelectors } from './';
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

export default {
  getAnswersByQuestionId,
};
