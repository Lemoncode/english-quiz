import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  ConfigureVerbsScene,
  FinalScoreScene,
  HomeScene,
  TestFillGapScene,
  TestVerbFormsScene,
  UserSettingsScene,
} from 'scenes';

var handleRedirect = (Component, routeProps): React.ReactNode => {
  if (!routeProps.location.state?.fromHome) {
    return (
      <Redirect
        to={{
          pathname: switchRoutes.root,
          state: { from: routeProps.location },
        }}
      />
    );
  }

  return <Component {...routeProps} />;
};

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={HomeScene} />
        <Route
          exact={true}
          path={switchRoutes.configureVerbs}
          render={location => handleRedirect(ConfigureVerbsScene, location)}
        />
        <Route
          exact={true}
          path={switchRoutes.finalScore}
          render={location => handleRedirect(FinalScoreScene, location)}
        />
        <Route
          exact={true}
          path={switchRoutes.testFillGap}
          render={location => handleRedirect(TestFillGapScene, location)}
        />
        <Route
          exact={true}
          path={switchRoutes.testVerbForms}
          render={location => handleRedirect(TestVerbFormsScene, location)}
        />
        <Route
          exact={true}
          path={switchRoutes.userSettings}
          render={location => handleRedirect(UserSettingsScene, location)}
        />
      </Switch>
    </Router>
  );
};
