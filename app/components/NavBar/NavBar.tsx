import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {theme} from '../../ui/theme/default/theme';
import {useThemeContext, Theme} from '../../ui/theme';

export type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = ({}) => {
  const {s} = useThemeContext(createStyle);

  return (
    <View style={s?.container}>
      <Image source={require('./assets/arrow-white.png')} />
      <Image
        style={{marginLeft: 'auto'}}
        source={require('./assets/empty-heart.png')}
      />
      <Image source={require('./assets/share.png')} />
    </View>
  );
};

NavBar.defaultProps = {};

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      width: '100%',
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: 16,
    },
  });
export {NavBar};
