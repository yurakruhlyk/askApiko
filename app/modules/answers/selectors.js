import { createSelector } from 'reselect';
import R from 'ramda';

const getAnswersLoading = createSelector(
  R.path(['answers', 'isAnswersLoading']),
  state => state,
);

const getAnswersLoadingError = createSelector(
  R.path(['answers', 'isAnswersLoadingError']),
  state => state,
);

const getAnswersIdsByQuestionId = createSelector(
  (state, id) => R.pathOr([], ['answers', 'answersIds', id])(state),
  state => state,
);

const getAnswersByQuestionId = createSelector(
  [
    getAnswersIdsByQuestionId,
    R.pathOr({}, ['answers', 'answersEntities']),
  ],
  (ids, entities) => ids.map(id => entities[id]),
);

const getAnswerById = createSelector(
  (state, id) => R.pathOr({}, ['answers', 'answersEntities', id])(state),
  state => state,
);

const getCountAllAnswersByQuestion = createSelector(
  R.path(['answers', 'countAllAnswersByQuestion']),
  state => state,
);

export const getAnswersCount = createSelector(
  (state, id) => R.pathOr([], ['answers', 'answersIds', id])(state),
  ids => ids.length,
);

const getAnswersLoadingMore = createSelector(
  R.path(['answers', 'isAnswersLoadingMore']),
  state => state,
);

const getAnswersLoadingMoreError = createSelector(
  R.path(['answers', 'isAnswersLoadingMoreError']),
  state => state,
);

const getAnswersRefreshing = createSelector(
  R.path(['answers', 'isAnswersRefreshing']),
  state => state,
);

const getAnswersHasNoMore = createSelector(
  R.path(['answers', 'isAnswersHasNoMore']),
  state => state,
);

export default {
  getAnswersLoading,
  getAnswersLoadingError,
  getAnswersIdsByQuestionId,
  getAnswersByQuestionId,
  getAnswerById,
  getCountAllAnswersByQuestion,
  getAnswersCount,
  getAnswersLoadingMore,
  getAnswersLoadingMoreError,
  getAnswersHasNoMore,
  getAnswersRefreshing,
};
