import merge from 'lodash.merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      light: '#F19895',
      main: '#F18C8E',
      dark: '#BB7F87',
    },
    secondary: {
      main: '#305F72',
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
          padding: '1rem 0',
        },
        a: {
          borderRadius: 50,
          backgroundColor: '#F18C8E',
          color: '#FFF',
          textDecoration: 'none',
          padding: '1rem 2rem',
          boxShadow:
            '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        },
        'a:hover': {
          backgroundColor: '#BB7F87',
        },
      },
    },
    MuiButton: {
      text: {
        borderRadius: 50,
        backgroundColor: '#F18C8E',
        color: '#FFF',
        padding: '1rem 2rem',
      },
      textSecondary: {
        borderRadius: 10,
        backgroundColor: '#FEF3F3',
        color: '#F18C8E',
      },
    },
  },
} as Theme);
