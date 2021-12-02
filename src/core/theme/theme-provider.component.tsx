import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { theme } from './theme';

export const ThemeProviderComponent = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        {children}
      </StylesProvider>
    </ThemeProvider>
  );
};
