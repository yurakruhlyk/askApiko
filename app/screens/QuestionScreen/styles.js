import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.questionScreen.background,
  },
  spinnerContainer: {
    marginVertical: dimensions.doubleIndent,
  },
});

export default styles;
