import { NetInfo } from 'react-native';
import { NavigationService } from '../../services';
import Api, { SocketApi } from '../../api';
import { authToken } from '../../utils/authToken';
import screens from '../../constants/screens';

export const initApi = token => () => {
  Api.setToken(token);
  SocketApi.initialize(token);

  // initialize socket handlers
  SocketApi.setOnMessageHandler(data => console.log(data));
};

export const initialization = () => async dispatch => {
  NetInfo.isConnected.addEventListener('connectionChange', isConnected => console.log(isConnected));

  try {
    const token = await authToken.get();

    if (token) {
      dispatch(initApi(token));
      NavigationService.navigate(screens.AuthorizedApp);
    }
  } catch (err) {
    console.log(err);
  }
};
