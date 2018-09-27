import { ActivityIndicator } from 'react-native';
import { compose } from 'recompose';
import { withStyle } from '../../utils/enhancers';
import { dimensions } from '../../styles';

const enhance = compose(withStyle({ marginVertical: dimensions.halfIndent }));

export default enhance(ActivityIndicator);
