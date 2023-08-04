import { StyleSheet } from 'react-native';
import { Theme } from '~/ui/theme';

export const createStyle = (theme: Theme) =>
StyleSheet.create({
  safe: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.woodsmoke
  },
  fullWidth: {
    width: '100%'
  },
  scrollviewFlexGrow: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  inputsContainerPaddingHorizontal: {
    width: '100%',
    padding: theme.metrics.x4,
    alignItems: 'center'
  },
  authHeaderContainer: {
    width: '100%',
    backgroundColor: theme.colors.subBackground,
    padding: theme.metrics.x4
  },
  authHeaderTitle: {
    color: theme.colors.textSub,
    fontFamily: theme.fonts.f700.fontFamily,
    fontSize: 28,
  },
  authHeaderBottomTextCont: {
    marginTop: theme.metrics.x2
  },
  validationsContainer: {
    width: '100%',
    marginBottom: theme.metrics.x3
  },
  rowBetween: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fullSpace: {
    width: '100%',
    height: '100%',
  },
  fullSpaceCentered: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSpaceRowCentered: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greyText: {
    fontFamily: theme.fonts.f400.fontFamily,
    color: theme.colors.greySubText,
    fontSize: 20
  },
  greySubTextSemiBold: {
    fontFamily: theme.fonts.f600.fontFamily,
    fontSize: 20,
    color: theme.colors.greySubText
  },
  whiteText: {
    fontFamily: theme.fonts.f400.fontFamily,
    color: theme.colors.white,
    fontSize: 18
  },
  whiteTextSemiBold: {
    fontFamily: theme.fonts.f600.fontFamily,
    color: theme.colors.white,
    fontSize: 20,
    marginBottom: theme.metrics.x4
  },
  whiteTextSemiBoldNoMargin: {
    fontFamily: theme.fonts.f600.fontFamily,
    color: theme.colors.white,
    fontSize: 20,
  },
  yellowTextSemiBold: {
    fontFamily: theme.fonts.f600.fontFamily,
    color: theme.colors.yellowMain,
    fontSize: 20
  },
  imgContain: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  bottomBtnContainerDefault: {
    width: '100%',
    paddingHorizontal: theme.metrics.x8,
    paddingVertical: theme.metrics.x3,
    zIndex: -1
  },
  topContainerPaddingHorizontal: {
    width: '100%',
    padding: theme.metrics.x4,
  },
  redTextSemiBold: {
    color: theme.colors.red,
    fontFamily: theme.fonts.f600.fontFamily,
    fontSize: 20,
  },
});