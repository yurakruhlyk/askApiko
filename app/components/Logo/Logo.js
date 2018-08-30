import React from 'react';
import { View, Image } from 'react-native';
import T from 'prop-types';
import { globalStyles } from '../../styles';
import logo from '../../../assets/images/logo.png';
import s from './styles';

const Logo = ({
  borderBottom,
  borderTop,
}) => (
  <View style={[
    s.container,
    borderBottom && globalStyles.borderBottom,
    borderTop && globalStyles.borderTop,
  ]}
  >
    <Image
      source={logo}
      style={s.image}
    />
  </View>
);


Logo.propTypes = {
  borderBottom: T.bool,
  borderTop: T.bool,
};

export default Logo;
