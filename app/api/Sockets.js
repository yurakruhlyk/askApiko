import io from 'socket.io-client/dist/socket.io';
import { BASE_URL } from '../constants/urls';

class SocketsApi {
  constructor() {
    this.socket = null;
  }

  initialize(token) {
    this.socket = io(BASE_URL, {
      transports: ['websocket'],
      query: {
        token,
      },
    });
  }

  setOnMessageHandler(handler) {
    if (!this.socket) {
      throw new Error('Socket needs to be initialized first.');
    }

    this.socket.on('message', handler);
  }
}

const sockets = new SocketsApi();

export default sockets;
