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

  getMe() {
    return axios.get(`${this._baseUrl}/users/my`);
  }

  signUp(username, email, password) {
    return axios.post(`${this._baseUrl}/auth/sign-up`, {
      email,
      password,
      profile: {
        fullName: username,
      },
    });
  }

  signIn(email, password) {
    return axios.post(`${this._baseUrl}/auth/sign-in`, {
      email,
      password,
    });
  }

  getQuestions(limit = 10, skip = 0, search = '') {
    return axios.get(`${this._baseUrl}/questions?limit=${limit}&skip=${skip}&search=${search}`);
  }
}

const api = new Api(BASE_URL);

export default api;
