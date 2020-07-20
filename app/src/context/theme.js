import React from 'react';

export const themesObj = {
    light: {
      foreground: '#000000',
      background: '#ffffff',
      key: 'light',
    },
    dark: {
      foreground: '#ffffff',
      background: '#001529',
      key: 'dark',
    },
};
  
export const ThemeContext = React.createContext(
    themesObj.dark // 默认值
);