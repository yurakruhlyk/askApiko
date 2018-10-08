import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontWeights,
  fontSizes,
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.questionItem.background,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 18,
    paddingVertical: dimensions.indent,
  },
  statusContainer: {
    marginRight: 5,
    alignItems: 'flex-end',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  votes: {
    fontSize: fontSizes.xsmall,
    color: colors.questionItem.votesCount,
    marginBottom: 7,
  },
  title: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
    marginBottom: dimensions.indent,
  },
  details: {
    flexDirection: 'row',
    marginTop: dimensions.indent,
  },
  date: {
    fontSize: fontSizes.xsmall,
    color: colors.questionItem.date,
    marginRight: 4,
  },
  author: {
    fontSize: fontSizes.xsmall,
    color: colors.questionItem.author,
  },
});

export default styles;
