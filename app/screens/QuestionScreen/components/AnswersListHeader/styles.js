import { StyleSheet } from 'react-native';
import {
  colors,
  fontSizes,
  fontWeights,
} from '../../../../styles';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.answerListHeader.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  count: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
  },
  orderBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderByTitle: {
    fontSize: fontSizes.xsmall,
    marginRight: 4,
  },
  orderByValue: {
    fontSize: fontSizes.xsmall,
  },
});

export default styles;
