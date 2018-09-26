import { createSelector } from 'reselect';
import R from 'ramda';

const getQuestionsLoadingState = createSelector(
  R.path(['questions', 'isQuestionsLoading']),
  state => state,
);

const getQuestionsLoadingErrorState = createSelector(
  R.path(['questions', 'isQuestionsLoadingError']),
  state => state,
);

const getQuestionsLoadingMoreState = createSelector(
  R.path(['questions', 'isQuestionsLoadingMore']),
  state => state,
);

const getQuestionsRefreshingState = createSelector(
  R.path(['questions', 'isQuestionsRefreshing']),
  state => state,
);

const getQuestionsHasNoMoreState = createSelector(
  R.path(['questions', 'isQuestionsHasNoMore']),
  state => state,
);

const getQuestionsListState = createSelector(
  [
    R.pathOr([], ['questions', 'questionsIds']),
    R.pathOr({}, ['questions', 'questionsEntities']),
  ],
  (ids, entities) => ids.map(id => entities[id]),
);

const getQuestionsCountState = createSelector(
  R.path(['questions', 'questionsIds']),
  ids => ids.length,
);

export default {
  getQuestionsLoadingState,
  getQuestionsLoadingErrorState,
  getQuestionsLoadingMoreState,
  getQuestionsRefreshingState,
  getQuestionsHasNoMoreState,
  getQuestionsListState,
  getQuestionsCountState,
};

