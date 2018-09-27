import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  colors,
} from '../../../../styles';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingTop: 10,
  },
  infoContainer: {
    flex: 1,
    marginBottom: 15,
    marginLeft: 20,
  },
  title: {
    fontSize: fontSizes.big,
    fontWeight: fontWeights.bold,
    marginBottom: 18,
  },
  descriptionContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 17,
    paddingVertical: 13,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  descriptionText: {
    fontSize: fontSizes.small,
  },
});

export default styles;
