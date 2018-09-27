import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.questionsScreen.background,
  },
  pageTitle: {
    paddingVertical: 16,
    paddingHorizontal: 17,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator,
  },
  containerCenter: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default styles;
