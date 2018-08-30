import R from 'ramda';

export const toUpperFirst = str => `${R.toUpper(R.head(str))}${R.tail(str)}`;
