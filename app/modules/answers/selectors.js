import { createSelector } from 'reselect';
import R from 'ramda';

const getAnswersLoadingState = createSelector(
  R.path(['answers', 'isAnswersLoading']),
  state => state,
);

const getAnswersLoadingErrorState = createSelector(
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

const getCountAllAnswersByQuestionState = createSelector(
  R.path(['answers', 'countAllAnswersByQuestion']),
  state => state,
);

export const getAnswersCount = createSelector(
  (state, id) => R.pathOr([], ['answers', 'answersIds', id])(state),
  ids => ids.length,
);

const getAnswersLoadingMoreState = createSelector(
  R.path(['answers', 'isAnswersLoadingMore']),
  state => state,
);

const getAnswersLoadingMoreErrorState = createSelector(
  R.path(['answers', 'isAnswersLoadingMoreError']),
  state => state,
);

const getAnswersHasNoMoreState = createSelector(
  R.path(['answers', 'isAnswersHasNoMore']),
  state => state,
);

export default {
  getAnswersLoadingState,
  getAnswersLoadingErrorState,
  getAnswersIdsByQuestionId,
  getAnswersByQuestionId,
  getCountAllAnswersByQuestionState,
  getAnswersCount,
  getAnswersLoadingMoreState,
  getAnswersLoadingMoreErrorState,
  getAnswersHasNoMoreState,
};
