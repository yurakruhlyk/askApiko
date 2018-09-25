const accent = '#ff9801';
const black = '#000000';
const white = '#ffffff';
const grey = '#bfbfbf';
const skyBlue = '#00A0ff';
const steelBlue = '#4676B4';
const whiteSmoke = '#f7f7f7';
const separator = '#c6c6c6';
const border = '#c6c6c6';

const colors = {
  accent,
  primaryText: black,
  white,
  black,
  grey,
  separator,
  border,

  header: {
    background: whiteSmoke,
  },

  input: {
    background: white,
    border: accent,
  },

  button: {
    background: skyBlue,
    title: white,
    disabled: '#D2D5DB',
  },

  link: {
    color: steelBlue,
  },

  drawerButton: {
    color: accent,
  },

  drawerItem: {
    background: white,
    activeBackground: accent,
    text: black,
    activeText: white,
    activeIcon: white,
    icon: black,
  },

  pageTitle: {
    color: black,
  },

  signUpScreen: {
    background: whiteSmoke,
  },
};

export default colors;
