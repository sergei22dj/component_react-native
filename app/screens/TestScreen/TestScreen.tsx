import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Theme, useThemeContext} from '../../ui/theme';
import {theme} from '../../ui/theme/default/theme';
import {Task1} from './components/task1/Task1';

export type TestScreenProps = {};

const TestScreen: React.FC<TestScreenProps> = ({}) => {
  const {s} = useThemeContext(createStyle);

  return (
    <View style={s?.container}>
      <Text>Task 3.1:</Text>
      <Task1 />
    </View>
  );
};

TestScreen.defaultProps = {};

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
  });
export {TestScreen};
