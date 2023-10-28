import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Easing,
  Image,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Theme, useThemeContext} from '../../../../ui/theme';
import ArrowDown from '../../assets/arrowDown';

export type Task1Props = {};

const Task1: React.FC<Task1Props> = ({}) => {
  const {s} = useThemeContext(createStyle);
  const [open, setOpen] = React.useState(false);
  // shared values ===
  const height = useSharedValue(50);
  const width = useSharedValue(100);
  const rotate = useSharedValue(0);
  // =====

  const toggleHeight = () => {
    const toHeight = open ? 50 : 110;
    const toWidth = open ? 100 : 50;
    height.value = withTiming(toHeight, {
      duration: 400,
    });
    setTimeout(
      () => {
        width.value = withTiming(toWidth, {
          duration: open ? 600 : 100,
        });
      },
      open ? 200 : 0,
    );
    rotate.value = withTiming(open ? 0 : 180, {
      duration: 200,
      easing: Easing.inOut(Easing.quad),
    });

    setOpen(!open);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: `${width.value}%`,
    };
  });
  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotate.value}deg`}, {perspective: 1000}],
    };
  });
  return (
    <View style={s?.container}>
      <Animated.View style={[s?.dropDown, animatedStyle]}>
        <View style={s?.textContainer}>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </View>
        <TouchableOpacity style={s?.iconContainer} onPress={toggleHeight}>
          <Animated.View style={iconAnimatedStyle}>
            <ArrowDown />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
      <View style={[s?.block, {width: '50%'}]}></View>
      <Animated.View style={[s?.block, buttonAnimatedStyle]}>
        <Text>Hello</Text>
      </Animated.View>
    </View>
  );
};

Task1.defaultProps = {};

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: theme.colors.greySubText,
      alignItems: 'flex-end',
      padding: 10,
    },
    block: {
      backgroundColor: theme.colors.grey200,
      height: 50,
      marginVertical: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: theme.colors.bamboo,
      height: 50,
      marginLeft: 'auto',
    },
    dropDown: {
      left: 0,
      top: 15,
      position: 'absolute',
      width: '50%',
      backgroundColor: theme.colors.green100,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 10,
    },
    textContainer: {
      flex: 1,
    },
    iconContainer: {},
  });
export {Task1};
