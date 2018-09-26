import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.header.background,
  },
  top: {
    paddingHorizontal: 17,
    paddingTop: 16,
  },
  pageTitle: {
    marginBottom: 38,
  },
  description: {
    fontSize: fontSizes.small,
    color: colors.grey,
    marginBottom: 24,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
});

export default styles;
