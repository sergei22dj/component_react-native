const black = '#000000';
const white = '#ffffff';
const blackOpacityBackground = 'rgba(0, 0, 0, 0.2)'
const yellowMain = '#FED337'
const yellowMainOpacity = 'rgba(254, 211, 55, 0.1)'
const subBackground = '#202427'
const greySubText = '#6D6D7B'
const itemBackground = '#D9D9D9'
const inactiveIcons = '#707070'
const textSub = '#FEF8FF'
const boldText = '#F9FBFE'
const greySubTextDesc = '#9F9FA0'
const lightGreen = '#40FDC8'
const transparent = 'transparent';
const borderMdm = 'rgba(255, 255, 255, 0.3)';
const borderSml = 'rgba(255, 255, 255, 0.1)';
const borderGrey = '#323232';
const disabledBackground = '#0E1011'
const textDescription = 'rgba(255, 255, 255, 0.6)';
const red = '#E86F6F';
const redOpacity = 'rgba(232, 111, 111, 0.1)'
const bayOfMany = '#293883';
const photoBackground = '#2C2C2C'
const iron = "#D5DBDC";
const shark = "#191C1E";
const abbey = "#47494B";
const green100 = '#ECFAF0';
const red100 = '#EFE1E9';
const blue100 = '#E9F7FC';
const yellow100 = '#FDF7EA';
const grey200 = '#D5DBDC';
const grey800 = '#374244';
const dodgerBlue = '#4B7DFF';
const green = '#43BA43'
const descOpacityText = '#FEF1EB'
const sulu = '#AAEA78';
const feijoa = '#92D37B';
const woodsmoke = '#0E0E0F';
const bamboo = "#D96901";
const azure = "#007AFF";
const tan = "#D4A994";
const caramel = "#FAD59E";
const peach = "#FFEBAD";
const thistle = "#DDB6E3";
const bluebell = "#A69BD1";
const nyanza = "#E2FCDA";
const powderBlue = "#B5E6E5";
const floralWhite = "#FCFAED";
const peachOrange = "#FEC591";
const backgroundWhite = '#f4f4f4';

const pastelColors = [
  tan,
  caramel,
  peach,
  thistle,
  bluebell,
  nyanza,
  powderBlue,
  floralWhite,
  peachOrange
];

const palette = {
  black,
  white,
  blackOpacityBackground,
  yellowMain,
  boldText,
  subBackground,
  greySubText,
  itemBackground,
  inactiveIcons,
  textSub,
  transparent,
  borderMdm,
  borderSml,
  borderGrey,
  textDescription,
  red,
  greySubTextDesc,
  lightGreen,
  bayOfMany,
  iron,
  shark,
  abbey,
  green100,
  red100,
  blue100,
  yellow100,
  grey200,
  grey800,
  disabledBackground,
  dodgerBlue,
  green,
  descOpacityText,
  yellowMainOpacity,
  redOpacity,
  sulu,
  woodsmoke,
  photoBackground,
  feijoa,
  bamboo,
  azure,
  tan,
  caramel,
  peach,
  thistle,
  bluebell,
  nyanza,
  powderBlue,
  floralWhite,
  peachOrange,
  backgroundWhite
} as const;

const darkThemePalette = {
  ...palette,
  black: white,
  white: black,
} as const;

const colors = {
  text: palette.white,
  ...palette,
} as const;

const darkThemeColors = {
  text: palette.black,
  ...darkThemePalette
} as const;

const gradients = {
  g1: ['rgba(255,255,255,.01)', palette.white]
};

export { colors, pastelColors, gradients, darkThemeColors };
