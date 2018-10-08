import { NetInfo } from 'react-native';
import { AlertService, NavigationService } from '../../services';
import Api, { SocketApi } from '../../api';
import { authToken } from '../../utils/authToken';
import { initialized } from './actions';
import { userOperations } from '../user';
import screens from '../../constants/screens';

const initApi = token => () => {
  Api.setToken(token);
  SocketApi.initialize(token);

  // initialize socket handlers
  SocketApi.setOnMessageHandler(data => console.log(data));
};

const initialization = () => async dispatch => {
  NetInfo.isConnected.addEventListener('connectionChange', isConnected => console.log(isConnected));

  try {
    const token = await authToken.get();

    if (token) {
      dispatch(initApi(token));

      const res = await Api.getMe();

      dispatch(userOperations.setUser(res.data.user));
      dispatch(initialized());

      NavigationService.navigate(screens.AuthorizedApp);
    }
  } catch (err) {
    AlertService.showErrorAlert('Invalid token. Please login again!');
  }
};

export default {
  initApi,
  initialization,
};
