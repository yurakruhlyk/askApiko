// eslint-disable-next-line max-len
const emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const isValidEmail = email => emailRegexp.test(email);

const passwordRegexp = /[a-zA-Z0-9!@#$%^&*]{8,}/;

export const isValidPassword = password => passwordRegexp.test(password);

export const trim = (string, onlyEnds) => {
  if (onlyEnds) {
    return string.trim();
  }

  return string.trim().replace(/\s+/g, '');
};
