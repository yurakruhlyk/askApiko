import R from 'ramda';

export const getCurrentRoutes = state => {
  let prevState = null;
  const findCurrentRoute = navState => {
    if (navState.index !== undefined) {
      prevState = navState;
      return findCurrentRoute(navState.routes[navState.index]);
    }
    return prevState.routes;
  };
  return findCurrentRoute(state);
};

export const getCurrentRoute = R.compose(R.last, getCurrentRoutes);

export const onNavigate = (nav, screen, params) => () => {
  nav.navigate(screen, params);
};

export const getParamOr = (def, param) =>
  R.pathOr(def, ['state', 'params', param]);

export const setParam = (nav, param, value) =>
  nav.setParams({ [param]: value });

export const getParams = R.pathOr({}, ['state', 'params']);

export const getFromParam = (prop, param) => nav =>
  getParamOr({}, param)(nav)[prop];

export const navigate = screen => props => onNavigate(props.navigation, screen);
