import { addUser } from './actions';

const setUser = user => async dispatch => {
  dispatch(addUser(user));
};

export default {
  setUser,
};
