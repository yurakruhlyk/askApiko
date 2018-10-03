import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
  },
  controllerPanel: {
    backgroundColor: colors.answerItem.controllerPanel,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  messageContainer: {
    // opacity: 0.2,
    backgroundColor: colors.answerItem.messageContainer,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  messageText: {
    fontSize: 14,
  },
});

export default styles;
