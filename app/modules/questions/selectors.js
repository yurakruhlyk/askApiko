import { createSelector } from 'reselect';
import R from 'ramda';

const getQuestionsLoading = createSelector(
  R.path(['questions', 'isQuestionsLoading']),
  state => state,
);

const getQuestionsLoadingError = createSelector(
  R.path(['questions', 'isQuestionsLoadingError']),
  state => state,
);

const getQuestionsLoadingMore = createSelector(
  R.path(['questions', 'isQuestionsLoadingMore']),
  state => state,
);

const getQuestionsRefreshing = createSelector(
  R.path(['questions', 'isQuestionsRefreshing']),
  state => state,
);

const getQuestionsHasNoMore = createSelector(
  R.path(['questions', 'isQuestionsHasNoMore']),
  state => state,
);

const getQuestionsCount = createSelector(
  R.path(['questions', 'questionsIds']),
  ids => ids.length,
);

const getQuestions = createSelector(
  [
    R.pathOr([], ['questions', 'questionsIds']),
    R.pathOr({}, ['questions', 'questionsEntities']),
  ],
  (ids, entities) => ids.map(id => entities[id]),
);

const getQuestionById = createSelector(
  (state, id) => R.pathOr({}, ['questions', 'questionsEntities', id])(state),
  state => state,
);


export default {
  getQuestionsLoading,
  getQuestionsLoadingError,
  getQuestionsLoadingMore,
  getQuestionsRefreshing,
  getQuestionsHasNoMore,
  getQuestionsCount,
  getQuestions,
  getQuestionById,
};

