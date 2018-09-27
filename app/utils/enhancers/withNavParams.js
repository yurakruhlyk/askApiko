import R from 'ramda';
import { withProps } from 'recompose';
import { getParams } from '../navHelpers';

export default (params = []) => withProps(R.pipe(
  R.prop('navigation'),
  getParams,
  R.ifElse(
    R.always(R.isEmpty(params)),
    R.identity,
    R.pick(params),
  ),
));
