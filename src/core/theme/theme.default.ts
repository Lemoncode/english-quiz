import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, ({
  palette: {
    primary: {
      light: '#F19895',
      main: '#F18C8E',
      dark: '#BB7F87',
    },
    secondary: {
      light: '#FBF5FF',
      main: '#FFE9F9',
      dark: '#F9F9F9',
    },
    success: {
      main: '#305F72',
      light: '#EAF9FE',
    },
    info: {
      main: '#EAF9FE',
    },
    warning: {
      main: '#F18C8E',
      light: '#FFF1EF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8',
    },
    text: {
      primary: '#305F72',
      secondary: '#000',
    },
    pastelShades: {
      yellow: '#FFF5E5',
      pink: '#FFE9F9',
      lightPink: '#FBF5FF',
      lightSalmon: '#FFF1EF',
      lightGreen: '#EAF9FE',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          textAlign: 'center',
        },
      },
    },
    MuiButton: {
      text: {
        borderRadius: 50,
        backgroundColor: '#F18C8E',
        color: '#fff',
      },
    },
  },
} as unknown) as Theme);
