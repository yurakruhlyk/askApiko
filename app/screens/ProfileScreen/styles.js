import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from '../../styles';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.profileScreen.background,
  },
  pageTitle: {
    paddingVertical: 16,
    paddingHorizontal: 17,
  },
  listTitle: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
    paddingVertical: 12,
    paddingHorizontal: 17,
  },
});

export default styles;
