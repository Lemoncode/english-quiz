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
      default: '#f9f9f9',
    },
    text: {
      primary: '#1d3e4c',
    },
    customPalette: {
      primaryLight: '#c36367',
      primaryMain: '#b33c40',
      primaryDark: '#bb7f87',
      lightWhite: '#f9f9f9',
      lightPink: '#fbf5ff',
      lightYellow: '#f6e0be',
      lightBlue: '#eaf9fe',
      dark: '#1d3e4c',
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`, // 1 unit = 8px / 0.5rem
});
