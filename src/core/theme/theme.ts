import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  typography: {
    fontFamily: ['M PLUS Rounded 1c', 'sans-serif'].join(','),
    // CUSTOM FONT FAMILY DOESN'T WORK
  },
  palette: {
    background: {
      default: '#f9f9f9',
    },
    text: {
      primary: '#305f72',
    },
    customPalette: {
      primaryLight: '#fff1ef',
      primaryDirty: '#f19895',
      primaryMain: '#ec8689',
      primaryDark: '#bb7f87',
      lightWhite: '#f9f9f9',
      lightPink: '#fbf5ff',
      lightYellow: '#fff5e5',
      lightBlue: '#eaf9fe',
      dark: '#305f72',
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`, // 1 unit = 8px / 0.5rem
});
