import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView as KeyboardAvoidingViewNative,
  Platform,
} from 'react-native';

const keyboardAvoidingProps = offset =>
  (Platform.OS === 'ios'
    ? {
      behavior: 'padding',
      keyboardVerticalOffset: offset || 0,
    }
    : {});

const KeyboardAvoidingView = ({ offset, children, ...props }) => (
  <KeyboardAvoidingViewNative {...props} {...keyboardAvoidingProps(offset)}>
    {children}
  </KeyboardAvoidingViewNative>
);

KeyboardAvoidingView.propTypes = {
  children: PropTypes.any,
};

export default KeyboardAvoidingView;
