import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button.background,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  disabled: {
    backgroundColor: colors.button.disabled,
  },
  title: {
    fontSize: fontSizes.smallest,
    color: colors.button.title,
  },
});

export default styles;
