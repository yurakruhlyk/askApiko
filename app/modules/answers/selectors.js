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

export default {
  getAnswersLoadingState,
  getAnswersLoadingErrorState,
  getAnswersIdsByQuestionId,
  getAnswersByQuestionId,
  getCountAllAnswersByQuestionState,
};
