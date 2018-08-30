import { StatusBar, Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { isAndroid } from '../utils/detectDevice';

export const indent = 10;
export const halfIndent = indent / 2;
export const doubleIndent = indent * 2;
export const container = 25;
export const borderRadius = 3;

export const device = Dimensions.get('window');

export const iosStatusBarHeight = isIphoneX() ? 44 : 20;

export const STATUSBAR_HEIGHT = isAndroid
  ? StatusBar.currentHeight
  : iosStatusBarHeight;
