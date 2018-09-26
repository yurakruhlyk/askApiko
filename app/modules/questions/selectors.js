import { createSelector } from 'reselect';
import R from 'ramda';

export const getQuestionsLoadingState = createSelector(
  R.path(['questions', 'isQuestionsLoading']),
  state => state,
);

export const getQuestionsLoadingErrorState = createSelector(
  R.path(['questions', 'isQuestionsLoadingError']),
  state => state,
);

export const getQuestionsList = createSelector(
  [
    R.pathOr([], ['questions', 'questionsIds']),
    R.pathOr({}, ['questions', 'questionsEntities']),
  ],
  (ids, entities) => ids.map(id => entities[id]),
);

export default {
  getQuestionsLoadingState,
  getQuestionsLoadingErrorState,
  getQuestionsList,
};

