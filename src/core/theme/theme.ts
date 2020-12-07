import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  typography: {
    // fontFamily property doesn't work here. It is temporary used globally in layout/app-layout.styles
    fontFamily: '"M PLUS Rounded 1c", sans-serif',
  },
  palette: {
    background: {
      default: '#ccc',
    },
    text: {
      primary: '#1d3e4c',
    },
    customPalette: {
      primaryLight: '#c36367',
      primaryMain: '#b33c40',
      primaryDark: '#8c2f32',
      lightWhite: '#f9f9f9',
      lightPink: '#fbf5ff',
      lightBlue: '#4ca3c7',
      dark: '#1d3e4c',
    },
  },
  breakpoints: {
    values: {
      xs: 400,
      sm: 550,
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`, // 1 unit = 8px / 0.5rem
});
