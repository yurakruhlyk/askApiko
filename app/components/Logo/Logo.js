import React from 'react';
import { View, Image } from 'react-native';
import T from 'prop-types';
import { globalStyles } from '../../styles';
import logo from '../../../assets/images/logo.png';
import s from './styles';

const Logo = ({
  borderBottom,
  borderTop,
  header,
  drawer,
}) => (
  <View style={[
    s.container,
    borderBottom && globalStyles.borderBottom,
    borderTop && globalStyles.borderTop,
  ]}
  >
    <Image
      source={logo}
      style={[
        header && s.headerImage,
        drawer && s.drawerImage,
      ]}
    />
  </View>
);


Logo.propTypes = {
  borderBottom: T.bool,
  borderTop: T.bool,
  header: T.bool,
  drawer: T.bool,
};

export default Logo;
