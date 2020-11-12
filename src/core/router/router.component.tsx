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

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={HomeScene} />
        <Route
          exact={true}
          path={switchRoutes.configureVerbs}
          component={ConfigureVerbsScene}
        />
        <Route
          exact={true}
          path={switchRoutes.finalScore}
          component={FinalScoreScene}
        />
        <Route
          exact={true}
          path={switchRoutes.testFillGap}
          component={TestFillGapScene}
        />
        <Route
          exact={true}
          path={switchRoutes.testVerbForms}
          component={TestVerbFormsScene}
        />
        <Route
          exact={true}
          path={switchRoutes.userSettings}
          component={UserSettingsScene}
        />
      </Switch>
    </Router>
  );
};
