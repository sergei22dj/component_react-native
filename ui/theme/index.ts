import React, { useContext, useMemo } from 'react';
import { theme as defaultTheme } from './default/theme';
import { darkTheme } from './default/darkTheme';
import { createStyle as createDefaultStyle } from './default/styles';

const ThemeContext = React.createContext<Theme>(defaultTheme);

export type Theme = typeof defaultTheme | typeof darkTheme;

type ThemeResult<S> = {
  theme: Theme;
  s: S | undefined;
  ds: ReturnType<typeof createDefaultStyle>;
};

type Keys<T, P = keyof T> = P;
export type IconNames = Keys<typeof defaultTheme.icons> | Keys<typeof darkTheme.icons>;
export type ThemeColors = Keys<typeof defaultTheme.colors> | Keys<typeof darkTheme.colors>;
export type DocIconsNames = Keys<typeof defaultTheme.docIcons> | Keys<typeof darkTheme.docIcons>;

function useThemeContext<S>(
  createStyleSheet?: (theme: Theme) => S,
): ThemeResult<S> {
  const currentTheme = useContext(ThemeContext) || defaultTheme || darkTheme;
  const result = useMemo(() => {
    const defaultStyles = createDefaultStyle(currentTheme);

    if (typeof createStyleSheet === 'function') {
      const styles = createStyleSheet(currentTheme);
      return {
        theme: currentTheme,
        s: styles,
        ds: defaultStyles
      };
    }
    return {
      theme: currentTheme,
      s: undefined,
      ds: defaultStyles
    };
  }, [currentTheme, createStyleSheet, createDefaultStyle]);

  return result;
}

export { ThemeContext, useThemeContext };
