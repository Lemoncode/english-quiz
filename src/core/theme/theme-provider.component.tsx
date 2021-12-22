import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';

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
