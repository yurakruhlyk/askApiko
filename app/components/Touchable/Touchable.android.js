import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';
import T from 'prop-types';

const noop = () => {};

const Touchable = ({
  onPress = noop,
  onLongPress = noop,
  onLayout = noop,
  children,
  rippleColor,
  style,
  backgroundType,
  borderless = false,
  ...props
}) => {
  if (Platform.Version < 21) {
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
    <TouchableNativeFeedback
      onLongPress={onLongPress}
      onLayout={onLayout}
      onPress={onPress}
      {...props}
      background={backgroundType
        ? TouchableNativeFeedback[backgroundType]()
        : TouchableNativeFeedback.Ripple(rippleColor, borderless)}
    >
      {style ? (
        <View style={style}>
          {children}
        </View>
      ) : (
        children
      )}
    </TouchableNativeFeedback>
  );
};

Touchable.defaultProps = {
  onPress: noop,
  onLongPress: noop,
  onLayout: noop,
  rippleColor: '#d5d3d5',
};

Touchable.propTypes = {
  onPress: T.func,
  children: T.any,
  style: T.any,
  onLongPress: T.func,
  onLayout: T.func,
  rippleColor: T.string,
  backgroundType: T.string,
  borderless: T.bool,
};

export default Touchable;
