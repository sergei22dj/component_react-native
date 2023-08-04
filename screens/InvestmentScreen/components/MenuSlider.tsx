import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useThemeContext, Theme} from '../../../ui/theme';
import {theme} from '../../../ui/theme/default/theme';

const menuItems = [
  'Overview',
  'Documents',
  'My Investments ',
  'Personal Manager',
];

export type MenuSliderProps = {};

const MenuSlider: React.FC<MenuSliderProps> = ({}) => {
  const {s} = useThemeContext(createStyle);
  const [activeIndex, setActiveIndex] = React.useState(0); // Добавляем состояние для активного элемента

  const handleItemPress = (index: number) => {
    setActiveIndex(index); // Обновляем активный элемент при нажатии
  };

  return (
    <View style={s?.container}>
      {menuItems.map((el, index) => (
        <TouchableOpacity
          style={[s?.item, activeIndex === index && s?.activeItem]} // Используем условие для применения стилей в зависимости от активного элемента
          onPress={() => handleItemPress(index)}
          key={index}>
          <Text style={[s?.text, activeIndex === index && s?.activeText]}>
            {el}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

MenuSlider.defaultProps = {};

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      columnGap: 8,
      marginVertical: 24,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      borderRadius: 8,
    },
    activeItem: {
      backgroundColor: theme.colors.white, // Добавляем стиль для активного элемента
    },
    text: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.colors.greySubText,
    },
    activeText: {
      color: theme.colors.black,
    },
  });
export {MenuSlider};
