import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from '../../../../styles';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.profileDetails.background,
    flexDirection: 'row',
    paddingVertical: 26,
    paddingHorizontal: 17,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator,
  },
  profileInfo: {
    marginLeft: 16,
  },
  fullName: {
    fontSize: fontSizes.xsbig,
    fontWeight: fontWeights.bold,
    paddingTop: 5,
    marginBottom: 4,
  },
  email: {
    fontSize: fontSizes.moreOfMedium,
  },
});

export default styles;
