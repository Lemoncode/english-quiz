import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    background: {
      default: '#f9f9f9',
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
  breakpoints: {
    values: {
      xs: 380,
      sm: 578,
      md: 728,
      lg: 1100,
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`, // 1 unit = 8px / 0.5rem
});
