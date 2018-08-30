import R from 'ramda';

export const getParam = param => R.path(['state', 'params', param]);

export const getParamOr = (def, param) => R.pathOr(def, ['state', 'params', param]);

export const setParam = (nav, param, value) => nav.setParams({ [param]: value });

export const getParams = R.pathOr({}, ['state', 'params']);

export const getFromParam = (prop, param) => nav => getParamOr({}, param)(nav)[prop];
