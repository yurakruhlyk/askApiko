import R from 'ramda';

export const delay = ms => new Promise(res => setTimeout(res, ms));

export const withDelay = R.flip(setTimeout);

export const isArray = arg => R.is(Array, arg);
