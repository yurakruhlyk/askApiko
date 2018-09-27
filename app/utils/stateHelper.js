/* eslint-disable implicit-arrow-linebreak */
import R from 'ramda';

import deepMerge from 'deepmerge';

const processChange = (change, state, action) => (
  typeof change === 'object' ? change : change(action, state)
);

export const mergeIn = change => (state, action) => ({
  ...state,
  ...(processChange(change, state, action)),
});

export const mergeInState = (stateProp, change, rootStateChange = {}) => (state, action) => ({
  ...state,
  ...processChange(rootStateChange, state, action),
  [stateProp]: {
    ...state[stateProp],
    ...(processChange(change, state, action)),
  },
});

export const mergeDeep = change => (state, action) => ({
  ...(deepMerge(state, processChange(change, state, action), {
    arrayMerge: (destinationArray, sourceArray) => sourceArray,
  })),
});

export const insert = (state, item) => {
  const { byId = {}, ids = [] } = state;
  const id = `${ids.length > 0 ? Math.max(...ids) + 1 : 0}`;

  return {
    byId: {
      ...byId,
      [id]: { id, ...item },
    },
    ids: [id, ...ids],
  };
};

export const insertAll = (state, items) => R.reduce(insert, state, items);


export const remove = (entitiesName, idsName, state, id) => ({
  ...state,
  [entitiesName]: R.omit([id], state[entitiesName]),
  [idsName]: R.reject(R.equals(id), state[idsName]),
}
);


export const normalizeSelector = (ids, id) => ids.map(_id => id[_id]);

export const normalizeReducer = (ids, entities) =>
  (state, action) => ({
    ...state,
    [entities]: {
      ...state[entities],
      ...action.payload[entities],
    },
    [ids]: [
      ...state[ids],
      ...action.payload[ids],
    ],
  });

export const overwriteData = (ids, entities) =>
  (state, action) => ({
    ...state,
    [entities]: {
      ...action.payload[entities],
    },
    [ids]: [
      ...action.payload[ids],
    ],
  });


export const normalize = (arr, entName, idsArrName) => {
  let id = {};

  const ids = arr.map((item) => {
    id = {
      ...id,
      [item._id]: item,
    };
    return item._id;
  });
  return { [entName]: ids, [idsArrName]: id };
};


export const update = (state, action) => {
  const { _id } = action.payload;
  const item = R.pathOr({}, ['id', _id], state);
  return ({
    ...state,
    id: {
      ...state.id,
      [_id]: {
        ...item,
        ...action.payload,
      },
    },
  });
};
