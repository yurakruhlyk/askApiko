import { StyleSheet } from 'react-native';
import { fontWeights, colors, fontSizes } from '../../../../styles';

const styles = StyleSheet.create({
  votes: {
    alignItems: 'center',
  },
  count: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
    color: colors.votes.count,
  },
});

export default styles;
