import { SecureStore } from 'expo';

class AuthToken {
  constructor() {
    this.AUTH_TOKEN = 'AUTH_TOKEN';
  }

  set(token) {
    return SecureStore.setItemAsync(this.AUTH_TOKEN, token);
  }

  get() {
    return SecureStore.getItemAsync(this.AUTH_TOKEN);
  }

  remove() {
    return SecureStore.deleteItemAsync(this.AUTH_TOKEN);
  }
}

export const authToken = new AuthToken();
