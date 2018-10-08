import { StyleSheet } from 'react-native';
import colors from './colors';
import * as dimensions from './dimensions';

const styles = StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
  },
  withMarginBottom: {
    marginBottom: dimensions.indent,
  },
  withMarginTop: {
    marginTop: dimensions.indent,
  },
  withMarginLeft: {
    marginRight: dimensions.indent,
  },
  withMarginRight: {
    marginRight: dimensions.indent,
  },
  withPaddingLeft: {
    paddingLeft: dimensions.indent,
  },
  withPaddingRight: {
    paddingRight: dimensions.indent,
  },
  withVerticalMargin: {
    marginTop: dimensions.indent,
    marginBottom: dimensions.indent,
  },
  withVerticalPadding: {
    paddingTop: dimensions.indent,
    paddingBottom: dimensions.indent,
  },
  withHorizontalPadding: {
    paddingRight: dimensions.indent,
    paddingLeft: dimensions.indent,
  },
  withHorizontalMargin: {
    marginRight: dimensions.indent,
    marginLeft: dimensions.indent,
  },
  withVerticalBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  stickToBottom: {
    bottom: 0,
  },
  stretchHorizontally: {
    left: 0,
    right: 0,
  },
  alignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  withBorderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  withBorderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
});

export default styles;
