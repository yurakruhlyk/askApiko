import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from '../../../../styles';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.authorDetails.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 17,
  },
  authorDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullName: {
    fontSize: fontSizes.small,
    marginLeft: 20,
  },
  userActionDetails: {
    alignItems: 'flex-end',
  },
  typeAction: {
    fontSize: fontSizes.xsmall,
    fontWeight: fontWeights.bold,
  },
  actionTime: {
    fontSize: fontSizes.xsmall,
  },
});

export default styles;
