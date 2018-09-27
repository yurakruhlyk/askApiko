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

  getAnswersByQuestionId(id, limit = 5, skip = 0) {
    return axios.get(`${this._baseUrl}/questions/${id}/answers?limit=${limit}&skip=${skip}`);
  }
}

const api = new Api(BASE_URL);

export default api;
