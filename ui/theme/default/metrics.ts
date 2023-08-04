import * as React from 'react';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const metrics = {
  borderWidth: 1,
  borderRadius: 5,
  x0125: 0.5,
  x025: 1,
  x05: 2,
  x: 4,
  x1_5: 6,
  x2: 8,
  x2_5: 10,
  x3: 12,
  x3_5: 14,
  x4: 16,
  x4_5: 18,
  x5: 20,
  x5_5: 22,
  x6: 24,
  x7: 28,
  x8: 32,
  x9: 36,
  x9_5: 38,
  x10: 40,
  x11: 44,
  x12: 48,
  height: height,
  width: width,
} as const;
