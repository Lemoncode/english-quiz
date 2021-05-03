import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  ConfigureVerbsScene,
  FinalScoreScene,
  HomeScene,
  TestFillGapScene,
  TestVerbFormsScene,
  UserSettingsScene,
} from 'scenes';
import { AuthRoute } from './authroute';
import { TestsRoute } from './testsroute';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={HomeScene} />
        <AuthRoute
          exact={true}
          path={switchRoutes.configureVerbs}
          component={ConfigureVerbsScene}
        />
        <TestsRoute
          exact={true}
          path={switchRoutes.finalScore}
          component={FinalScoreScene}
        />
        <AuthRoute
          exact={true}
          path={switchRoutes.testFillGap}
          component={TestFillGapScene}
        />
        <AuthRoute
          exact={true}
          path={switchRoutes.testVerbForms}
          component={TestVerbFormsScene}
        />
        <AuthRoute
          exact={true}
          path={switchRoutes.userSettings}
          component={UserSettingsScene}
        />
      </Switch>
    </Router>
  );
};
