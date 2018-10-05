import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../../../styles';

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
    backgroundColor: colors.answerItem.messageContainer,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  messageText: {
    fontSize: fontSizes.smallest,
  },
  opacity: {
    opacity: 0.2,
  },
  status: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
