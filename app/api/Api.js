import axios from 'axios';
import { BASE_URL } from '../constants/urls';

class Api {
  constructor(baseUrl) {
    this._baseUrl = `${baseUrl}/api/v1`;
  }

  setToken(token) { // eslint-disable-line
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  mockCall() { // eslint-disable-line
    return new Promise(res => setTimeout(res, 1000));
  }

  signUp({ username, email, password }) {
    return axios.post(`${this._baseUrl}/auth/sign-up`, {
      email,
      password,
      profile: {
        fullName: username,
      },
    });
  }

  signIn({ email, password }) {
    return axios.post(`${this._baseUrl}/auth/sign-in`, {
      email,
      password,
    });
  }
}

const api = new Api(BASE_URL);

export default api;
