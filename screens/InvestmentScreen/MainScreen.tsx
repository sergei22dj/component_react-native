import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {useThemeContext} from '../../ui/theme';
import {theme} from '../../ui/theme/default/theme';
import {Theme} from '../../ui/theme';
import TrainingComponenet from '../../components/TrainingComponent/TrainingComponent';
import {NavBar} from '../../components/NavBar/NavBar';
import {HeaderInvestment} from '../../components/Headers/HeaderInvestment';
import LinearGradient from 'react-native-linear-gradient';
import {MenuSlider} from './components/MenuSlider';

export type MainScreenProps = {};

const MainScreen: React.FC<MainScreenProps> = ({}) => {
  const {s} = useThemeContext(createStyle);

  return (
    <View style={s?.container}>
      <NavBar />
      <HeaderInvestment />
      <View style={s?.imageContainer}>
        <Image style={s?.backImage} source={require('./assets/Alto.png')} />
        <LinearGradient
          colors={[
            '#ffffff00',
            theme.colors.backgroundWhite,
            theme.colors.backgroundWhite,
          ]}
          style={s?.bottomGradient}
        />
      </View>
      <MenuSlider />
      <TrainingComponenet />
      <Text style={s?.disclaimer}>Disclaimer:</Text>
      <View style={s?.disclaimerContainer}>
        <Text style={s?.disclaimerText}>
          Accurate information is not guaranteed. Prices in the secondary market
          may not be met.
        </Text>
      </View>
    </View>
  );
};

MainScreen.defaultProps = {};

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundWhite,
      paddingHorizontal: 16,
    },
    imageContainer: {
      position: 'absolute',
      zIndex: -1,
      height: 270,
    },
    backImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    bottomGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 120,
      backgroundColor: 'transparent',
    },
    disclaimer: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.colors.black,
      marginTop: 24,
    },
    disclaimerContainer: {
      marginTop: 12,
      paddingHorizontal: 21,
      paddingVertical: 14,
      backgroundColor: theme.colors.white,
    },
    disclaimerText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.colors.greySubText,
    },
  });

const MemorizedComponent = React.memo(MainScreen);
export {MemorizedComponent as MainScreen};
