import * as actions from './actions';
import Api from '../../api';
import { authToken } from '../../utils/authToken';
import { getErrMessage } from '../../utils/errorHelper';

export const signUp = ({ username, email, password }) => async (dispatch) => {
  try {
    dispatch(actions.signUpStart());
    
    const res = await Api.signUp({ username, email, password });
    
    await authToken.set(res.data.token);

    dispatch(actions.signUpSuccess());
  } catch (err) {
    const { message } = err.response.data;
    const errorMessage = getErrMessage({ message });
    
    dispatch(actions.signUpError(errorMessage));
    throw new Error(errorMessage);
  }
};
