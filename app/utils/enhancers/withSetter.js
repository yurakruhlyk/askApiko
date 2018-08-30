import { compose, withHandlers, withState } from 'recompose';

export default (
  stateName,
  updaterName,
  handlerName,
  initialValue,
) => compose(
  withState(stateName, updaterName, initialValue),
  withHandlers({
    [handlerName]: props => (val) => {
      props[updaterName](val);
    },
  }),
);
