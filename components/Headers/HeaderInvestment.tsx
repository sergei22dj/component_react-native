import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Theme, useThemeContext} from '../../ui/theme';
import {theme} from '../../ui/theme/default/theme';

export type HeaderInvestmentProps = {};

const HeaderInvestment: React.FC<HeaderInvestmentProps> = ({}) => {
  const {s} = useThemeContext(createStyle);

  return (
    <View style={s?.container}>
      <View style={s?.imageContainer}>
        <Image source={require('./assets/logo.png')} />
      </View>
      <View style={s?.textContainer}>
        <Text style={s?.title}>Alto Pharmacy</Text>
        <Text style={s?.description}>
          Invest in a tech-first digital pharmacy disrupting the prescription
          management
        </Text>
      </View>
    </View>
  );
};

HeaderInvestment.defaultProps = {};

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',

      marginTop: 142,
    },
    imageContainer: {
      paddingVertical: 18,
      paddingHorizontal: 14,
      backgroundColor: theme.colors.white,
      borderRadius: 50,
      width: 64,
      height: 64,
    },
    textContainer: {
      flex: 1,
      marginLeft: 12,
    },
    title: {
      fontSize: 20,
      fontWeight: '400',
    },
    description: {
      fontSize: 12,
      marginTop: 'auto',
      fontWeight: '400',
      color: theme.colors.greySubText,
    },
  });

export {HeaderInvestment};
