import { StyleSheet } from 'react-native';
import { dimensions, colors } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.header.background,
  },
  top: {
    flex: 1,
    paddingHorizontal: 17,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  pageTitle: {
    marginBottom: 38,
  },
  inputContainer: {
    marginBottom: dimensions.doubleIndent,
  },
  linkContainer: {
    alignItems: 'center',
  },
});

export default styles;
