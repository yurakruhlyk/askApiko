import { compose, withHandlers, withState } from 'recompose';

export default (stateName, updaterName, handlerName) => compose(
  withState(stateName, updaterName, false),
  withHandlers({
    [handlerName]: props => () => {
      props[updaterName](!props[stateName]);
    },
  }),
);
