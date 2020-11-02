import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      light: '##F19895',
      main: '##F18C8E',
      dark: '##BB7F87',
    },
    secondary: {
      light: '#fff584',
      main: '#d6c254',
      dark: '#a29223',
    },
    success: {
      main: '#305F72',
    },
    info: {
      main: '#EAF9FE',
    },
    warning: {
      main: '#F18C8E',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8',
    },
    text: {
      primary: '#305F72',
    },
    pastelShades: {
      yellow: '#FFF5E5',
      pink: '#FFE9F9',
      lightPink: '#FBF5FF',
      lightSalmon: '#FFF1EF',
      lightGreen: '#EAF9FE',
    },
  },
} as Theme);
