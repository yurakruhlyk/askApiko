import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../../styles';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.questionScreen.background,
    paddingBottom: dimensions.indent,
  },
  input: {
    borderColor: colors.border,
    height: 63,
    padding: dimensions.indent,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: dimensions.indent,
  },
});

export default styles;
