import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { GlobalVerbsProvider } from 'core/verbs';
import { ScoreProvider } from 'core/score';
import { SettingsProvider } from 'core/settings';
import { CssBaseline } from '@material-ui/core';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <CssBaseline />
      <ScoreProvider>
        <GlobalVerbsProvider>
          <SettingsProvider>
            <RouterComponent />
          </SettingsProvider>
        </GlobalVerbsProvider>
      </ScoreProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);
