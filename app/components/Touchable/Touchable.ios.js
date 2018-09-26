import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import T from 'prop-types';

const noop = () => {};

const Touchable = ({
  onPress = noop,
  onLongPress = noop,
  onLayout = noop,
  children,
  style,
  useOpacity,
  ...props
}) => {
  if (useOpacity) {
    return (
      <TouchableOpacity
        onLongPress={onLongPress}
        onLayout={onLayout}
        onPress={onPress}
        style={style}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableHighlight
      onLongPress={onLongPress}
      onLayout={onLayout}
      onPress={onPress}
      style={style}
      {...props}
    >
      {children}
    </TouchableHighlight>
  );
};

Touchable.defaultProps = {
  onPress: noop,
  onLongPress: noop,
  onLayout: noop,
};

Touchable.propTypes = {
  onPress: T.func,
  children: T.any,
  style: T.any,
  onLongPress: T.func,
  onLayout: T.func,
  useOpacity: T.bool,
};

export default Touchable;
