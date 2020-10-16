import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { GlobalVerbsProvider } from 'core/verbs';
import { ScoreProvider } from 'core/score';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <ScoreProvider>
        <GlobalVerbsProvider>
          <RouterComponent />
        </GlobalVerbsProvider>
      </ScoreProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);
