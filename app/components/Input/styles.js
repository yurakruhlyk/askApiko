import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.input.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.input.border,
    height: 38,
    borderRadius: 5,
    paddingLeft: 14,
  },
});

export default styles;
