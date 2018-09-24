import Api from '../../api';
import {
  signUpStart,
  signUpSuccess,
  signUpError,

  signInStart,
  signInSuccess,
  signInError,

  signOut,
} from './actions';
import { authToken } from '../../utils/authToken';
import { getErrMessage } from '../../utils/errorHelper';
import { NavigationService } from '../../services';
import screens from '../../constants/screens';

const signUp = ({ username, email, password }) => async (dispatch) => {
  try {
    dispatch(signUpStart());

    const res = await Api.signUp({ username, email, password });

    await authToken.set(res.data.token);

    dispatch(signUpSuccess());
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(signUpError(errMessage));
    throw new Error(errMessage);
  }
};

const signIn = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(signInStart());

    const res = await Api.signIn({ email, password });

    await authToken.set(res.data.token);

    dispatch(signInSuccess());
  } catch (err) {
    const errMessage = getErrMessage(err);

    dispatch(signInError(errMessage));
    throw new Error(errMessage);
  }
};

const logout = () => async (dispatch) => {
  dispatch(signOut());
  await authToken.remove();
  NavigationService.navigate(screens.UnauthorizedApp);
};

export default {
  signUp,
  signIn,
  logout,
};

