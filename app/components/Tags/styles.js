import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: colors.questionItem.tagBackground,
    fontSize: fontSizes.xsmall,
    color: colors.questionItem.tagColor,
    marginRight: 6,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
});

export default styles;
